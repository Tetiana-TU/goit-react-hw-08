import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import { TaskList } from "../../components/ContactList/TaskList";
import { TaskEditor } from "../../components/ContactEditor/TaskEditor";
import { fetchTasks } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <TaskEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
