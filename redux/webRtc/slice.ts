import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CurrentUser {
  [key: string]: {
    userName: string;
    audio: boolean;
    video: boolean;
    screen: boolean;
  };
}

interface Participant {
  [key: string]: {
    currentUser?: boolean;
    userName: string;
    audio: boolean;
    video: boolean;
    screen: boolean;
  };
}

interface StateProps {
  currentUser: CurrentUser | null;
  participants: Participant;
}

const initialState: StateProps = {
  currentUser: null,
  participants: {},
};

const webRtcSlice = createSlice({
  name: "webRtc",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    addParticipant: (state, action: PayloadAction<Participant>) => {
      let { payload } = action;
      const currentUserId = Object.keys(state.currentUser || {})[0];
      const participantId = Object.keys(payload)[0];
      if (currentUserId === participantId) {
        payload[participantId].currentUser = true;
      }
      state.participants = { ...state.participants, ...payload };
    },
    removeParticipant: (state, action) => {
      let { payload } = action;
      delete state.participants[payload];
    },
  },
});
export const { setUser, addParticipant, removeParticipant } =
  webRtcSlice.actions;
export default webRtcSlice.reducer;
