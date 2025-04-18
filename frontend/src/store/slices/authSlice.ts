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

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => {
    try {
      // En desarrollo usamos el mock, en producción usaríamos la API real
      const data = await mockLogin(credentials);
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      localStorage.removeItem('token');
      throw error;
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData: RegisterData) => {
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
      throw error;
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
      localStorage.removeItem('token');
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.error.message || 'Error en el registro';
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.error.message || 'Error en el inicio de sesión';
      });
  },
});

export const { logout, updateUser } = authSlice.actions;
export default authSlice.reducer; 