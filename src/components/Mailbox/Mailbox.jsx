const Mailbox = ({ username, messages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </>
  );
};

export default Mailbox;
