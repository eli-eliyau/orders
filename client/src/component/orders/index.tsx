import React, { useState } from "react";

import OrderDeteils from "./OrderDeteils";
import { AppBar } from "@mui/material";
import {
  ButtonUi,
  DefultContainer,
  HeaderWarper,
  SearchOrder,
} from "../style/tableOrders.style";
import Card from "../Cards";
import { DefaultContainer } from "../../defultContainer";

const AllOrders = () => {
  const [openAddNewOrder, setOpenAddNewOrder] = useState(false);

  return (
    <DefaultContainer background={true}>
      {/* <HeaderWarper>
        <ButtonUi
          onClick={() => {
            setOpenAddNewOrder(true);
          }}
        >
          הזמנה חדשה
        </ButtonUi>
        <SearchOrder placeholder="חיפוש" type="text" />
      </HeaderWarper> */}
      <OrderDeteils
        openAddNewOrder={openAddNewOrder}
        setOpenAddNewOrder={setOpenAddNewOrder}
      />
    </DefaultContainer>
  );
};

export default AllOrders;
