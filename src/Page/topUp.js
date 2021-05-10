import React from "react";
import card from "../img/card.png";
import wallet from "../img/wallet.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
function topUp() {
  return (
    <div className="Wallet">
      <div className="wallet-left">
        <img src={card}></img>
      </div>
      <div className="wallet-right">
        <h3>Top up my wallet</h3>
        <div className="mywallet">
          <img src={wallet}></img>
          <p>My Wallet</p>
          <p>$3,500</p>
        </div>
        <br></br>
        <p>CARDHOLDER NAME</p>
        <input type="text" className="creditcard"></input>
        <p>CARD NUMBER</p>
        <input type="number" className="creditcard"></input>
        <div className="secret">
          <div className="secret-box">
            <p>EXPIRY DATE</p>
            <input type="number" className="creditcard-small"></input>
          </div>
          <div className="secret-box">
            <p>CVV</p>
            <input type="number" className="creditcard-small"></input>
          </div>
        </div>
        <br></br>
        <h2>TOP UP AMOUNT : $ 200</h2>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/my-course"
          className="btn-pay"
        >
          pay now
        </Button>
      </div>
    </div>
  );
}
export default topUp;
