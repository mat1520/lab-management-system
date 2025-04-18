import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Lab {
  id: string;
  name: string;
  description: string;
  status: 'available' | 'in_use' | 'maintenance';
  currentUser?: {
    id: string;
    name: string;
  };
}

interface LabState {
  labs: Lab[];
  selectedLab: Lab | null;
  loading: boolean;
  error: string | null;
}

const initialState: LabState = {
  labs: [],
  selectedLab: null,
  loading: false,
  error: null,
};

const labSlice = createSlice({
  name: 'lab',
  initialState,
  reducers: {
    fetchLabsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchLabsSuccess: (state, action: PayloadAction<Lab[]>) => {
      state.loading = false;
      state.labs = action.payload;
      state.error = null;
    },
    fetchLabsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    selectLab: (state, action: PayloadAction<Lab>) => {
      state.selectedLab = action.payload;
    },
    updateLabStatus: (state, action: PayloadAction<{ id: string; status: Lab['status'] }>) => {
      const lab = state.labs.find(l => l.id === action.payload.id);
      if (lab) {
        lab.status = action.payload.status;
      }
      if (state.selectedLab?.id === action.payload.id) {
        state.selectedLab.status = action.payload.status;
      }
    },
  },
});

export const { 
  fetchLabsStart, 
  fetchLabsSuccess, 
  fetchLabsFailure, 
  selectLab, 
  updateLabStatus 
} = labSlice.actions;
export default labSlice.reducer; 