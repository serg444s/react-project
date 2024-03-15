import Mailbox from './Mailbox';
import RenderBooks from './BookList';

export default function AppBook() {
  return (
    <div>
      <Mailbox username="Polly" messages={['Hello', 1, 2, 'Task']} />
      <RenderBooks />
    </div>
  );
}
