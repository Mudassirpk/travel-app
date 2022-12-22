import { useState } from "react";

import SelectMenu from "./SelectMenu";
import ProfileInformation from "./ProfileInformation";
const ProfileBody = () => {
  const [bodyTranformValue, setBodyTransformValue] = useState<number>(0);

  function transformBody(magnitude: number) {
    setBodyTransformValue(magnitude);
  }

  return (
    <section>
      <SelectMenu transformAction={transformBody} />
      <ProfileInformation tranformValue={bodyTranformValue} />
    </section>
  );
};

export default ProfileBody;
