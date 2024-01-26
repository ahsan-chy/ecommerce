import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import Input from "@/components/TextInput/TextInput";
import "./ShipPayment.scss";
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown";
import { countries } from "@/db/countries";

const paymentType = [
  { value: "bank card", label: "Bank card" },
  { value: "paypal", label: "Paypal" },
  { value: "c-o-d", label: "C-O-D" },
];

const ShipPayment = () => {
  return (
    <SideMarginWrapper>
      <div className="ship-wrapper">
        <div className="top-wrapper">
          <div className="ship-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
        </div>
        <div className="ship-details">
          <h2>Cart</h2>
          <p>Here you can check your order with further confirmation and payment.</p>

          <div className="shipping-inputs">
            <div className="shipping">
              <h3>Shipping </h3>
              <div className="input-row double-inputs">
                <Input label="First Name" type="text" placeholder="John" required={true} />
                <Input label="Last Name" type="text" placeholder="Smith" required={true} />
              </div>
              <div className="input-row double-inputs">
                <FilterDropdown
                  title="Select Country"
                  options={countries}
                  required={true}
                  filterType="default"
                />
                <FilterDropdown
                  title="State"
                  options={countries}
                  required={true}
                  filterType="default"
                />
              </div>
              <div className="input-row triple-inputs">
                <Input label="Address" type="text" placeholder="123 Street" required={true} />
                <Input label="" type="number" placeholder="# 126" />
                <Input label="Postal/Zip" type="number" placeholder="000000" required={true} />
              </div>
              <div className="input-row double-inputs">
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="00-123-4567"
                  required={true}
                  pattern="^(?:(?:\+|0{0,2})\d{0,4}[.\-\s]?[0-9]{1,5}[.\-\s]?|)\d{0,15}$"
                />
                <Input label="Email" type="email" placeholder="exemple@com" required={true} />
              </div>
            </div>
            <div className="payment">
              <h3>Payment</h3>
              <div className="input-row">
                <FilterDropdown
                  title="Payment Method"
                  options={paymentType}
                  required={true}
                  filterType="default"
                />
              </div>
              <div className="input-row">
                <Input
                  label="Cardholder's Name"
                  type="text"
                  placeholder="John Smith"
                  required={true}
                />
              </div>
              <div className="input-row">
                <Input
                  label="Card Number"
                  type="text"
                  placeholder="0000 1111 2222 3333 4444"
                  required={true}
                />
              </div>
              <div className="input-row double-inputs">
                <Input label="Expires Date" type="number" placeholder="12/23" required={true} />
                <Input label="CVV" type="text" placeholder="***" required={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default ShipPayment;
