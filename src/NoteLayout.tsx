import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note, Tag } from "./App";

type Props = {
  notes: Note[];
};
const NoteLayout: React.FC<Props> = ({ notes }: Props) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note === null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export default NoteLayout;

export const useNote = () => {
  return useOutletContext<Note>();
};
