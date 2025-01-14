import { useParams } from "react-router-dom";
import { getModule } from "../Data";

export default function Module() {
  const {catId, moduleId} = useParams()
  const { name, desc, speaker } = getModule({ catId, moduleId });

  return (
    <>
    <h2>Module</h2>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{speaker.name}</h4>
      <span>
        {speaker.title}
      </span>

    </>
  );
}
