import { forwardRef } from 'react';

const CustomButton = forwardRef(function CustomButton(props, ref) {
  return <button ref={ref}>{props.children}</button>;
});

CustomButton.displayName = 'CustomButton'; // Назначение имени компоненту с использованием displayName

export default CustomButton;
