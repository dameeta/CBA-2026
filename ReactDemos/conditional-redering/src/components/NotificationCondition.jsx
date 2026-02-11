function NotificationCondition({hasSomeMessage})
{

  return (
    <div>
      {hasSomeMessage && <p>You have received new message</p>}

    </div>
  );
}

export default NotificationCondition;