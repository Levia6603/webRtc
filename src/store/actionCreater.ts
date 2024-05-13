import { ADD_PARTICIPANT, REMOVE_PARTICIPANT, SET_USER } from "./actionTypes";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: {
      currentUser: user,
    },
  };
};

const addParticipant = (participant) => {
  return {
    type: ADD_PARTICIPANT,
    payload: {
      participant,
    },
  };
};

const removeParticipant = (participantKey) => {
  return {
    type: REMOVE_PARTICIPANT,
    payload: {
      participantKey,
    },
  };
};
