import "./styles.css";
import { PaymentForm } from "react-square-web-payments-sdk";

export default function App() {
  return (
    <PaymentForm {...props}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </PaymentForm>
  );
}
