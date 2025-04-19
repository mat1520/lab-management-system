import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null,
};

// Simulación de API para desarrollo
const mockLogin = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (credentials.email === 'admin@example.com' && credentials.password === 'admin123') {
    return {
      user: {
        id: '1',
        name: 'Administrador',
        email: 'admin@example.com',
        role: 'admin'
      },
      token: 'mock-jwt-token'
    };
  }
  
  throw new Error('Credenciales inválidas');
};

export const login = createAsyncThunk<AuthResponse, LoginCredentials, { rejectValue: string }>(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      // En desarrollo usamos el mock, en producción usaríamos la API real
      const data = await mockLogin(credentials);
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      localStorage.removeItem('token');
      return rejectWithValue(error instanceof Error ? error.message : 'Error al iniciar sesión');
    }
  }
);

export const register = createAsyncThunk<AuthResponse, RegisterData, { rejectValue: string }>(
  'auth/register',
  async (userData: RegisterData, { rejectWithValue }) => {
    try {
      // Simulación de registro exitoso
      const data: AuthResponse = {
        user: {
          id: Date.now().toString(),
          name: userData.name,
          email: userData.email,
          role: 'user'
        },
        token: 'mock-jwt-token'
      };
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      localStorage.removeItem('token');
      return rejectWithValue(error instanceof Error ? error.message : 'Error al registrar usuario');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error al iniciar sesión';
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error al registrar usuario';
      });
  }
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer; 