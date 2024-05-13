import { useEffect } from "react";
import dbRef, { userName, connectedRef } from "./server/firebase";
import {
  child,
  onChildAdded,
  onChildRemoved,
  onDisconnect,
  onValue,
  push,
} from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  addParticipant,
  removeParticipant,
} from "../redux/webRtc/slice";
import { RootStateType } from "../redux";
import { Wrapper, Container, UserCard } from "./style";

function App() {
  const participantRef = child(dbRef, "particpantRef");
  const user = useSelector((state: RootStateType) => state.webRtc.currentUser);
  const participants = useSelector(
    (state: RootStateType) => state.webRtc.participants
  );
  const dispatch = useDispatch();
  useEffect(() => {
    onValue(connectedRef, (snap) => {
      if (snap.val()) {
        const defaultPreferences = {
          audio: true,
          video: false,
          screen: false,
        };
        const userRef = push(participantRef, {
          userName,
          preferences: defaultPreferences,
        });
        dispatch(
          setUser({
            [userRef.key || ""]: {
              userName,
              ...defaultPreferences,
            },
          })
        );
        onDisconnect(userRef).remove();
      }
    });
  }, []);
  useEffect(() => {
    if (user) {
      onChildAdded(participantRef, (snap) => {
        const { userName, preferences } = snap.val();
        dispatch(
          addParticipant({
            [snap.key || ""]: {
              userName,
              ...preferences,
            },
          })
        );
      });
      onChildRemoved(participantRef, (snap) => {
        dispatch(removeParticipant(snap.key));
      });
    }
  }, [user]);
  return (
    <>
      <Wrapper>
        <Container>
          {participants ? (
            <>
              {Object.values(participants).map((el, i) => (
                <UserCard key={i}>{el.userName}</UserCard>
              ))}
            </>
          ) : (
            <></>
          )}
          {/* Current User: {JSON.stringify(user)}
          <br />
          Participants: {JSON.stringify(participants)} */}
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
