import React, { useState, useEffect } from "react";
import s from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import Image from "../../assets/index";

const SideBar = () => {
  const [page, setPage] = useState("home");

  useEffect(() => {
    try {
      fetch('https://api.monobank.ua/bank/currency').then((data)=>{
        return data.json()
      }).then((res)=>{
        console.log(res);
        console.log(res.find((currency)=>{
          return currency.currencyCodeA === 392
        }));
      })
    } catch (error) {
      
    }
  }, []);















  return (
    <div>
      <div className={s.links}>
        <div className={s.homeLink}>
          <NavLink
            onClick={() => {
              setPage("home");
            }}
            className={s.link}
            style={{ fontWeight: page === "home" ? "bold" : "normal" }}
            to="home"
          >
            <div className="activeWrap">
@@ -44,6 +45,7 @@
            setPage("statistic");
          }}
          className={s.link}
          style={{ fontWeight: page === "statistic" ? "bold" : "normal" }}
          to="statistic"
        >
          <div className="activeWrap">
@@ -54,10 +56,13 @@
      </div>
      <div className={s.balance}>
        <p className={s.text}>YOUR BALANCE</p>
        <div className={s.balanceCount}>
          <p className={s.currency}>₴</p>
          <p className={s.balanceValue}> 24 000.00</p>
          </div>
      </div>
    </div>
  );
};

export default SideBar;