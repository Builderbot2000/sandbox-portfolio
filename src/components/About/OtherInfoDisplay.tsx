import { MemberProfile } from "../../types/types";
import MemberInfoDisplay from "./MemberInfoDisplay";

const OtherInfoDisplay = ({
  name,
  avatarSrc,
  position,
  quote,
  email,
  stack,
}: Omit<MemberProfile, "entryPath">) => {
  return (
    <MemberInfoDisplay
      name={name}
      avatarSrc={avatarSrc}
      position={position}
      quote={quote}
      email={email}
      stack={stack}
    />
  );
};

export default OtherInfoDisplay;
