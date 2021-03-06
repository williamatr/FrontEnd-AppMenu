import { connect } from "react-redux";
import React from "react";
import { Image } from "antd";
import FormsFood from "../forms_menu/forms_menu.jsx";
import { ArrowLeftOutlined } from "@ant-design/icons";
const Page_food = ({ foto, show_food, showMenu, show_price }) =>
  show_price.map(d => (
    <div className="page_food" key={d.id}>
      <div className="head_page_food">
        <div className="head_line_food">
          <div className="div_button_back_food">
            <button className="button_back_food" onClick={() => showMenu()}>
              <ArrowLeftOutlined />
            </button>
          </div>
          <div className="title_food">{d.product.name}</div>
        </div>
        <hr className="line_order" />
      </div>
      <div className="img_food">
        <Image src={d.product.image} />
      </div>
      <div className="text_food">
        <div className="desc_food">{d.product.description}</div>
        <div>
          <p className="price_food">${d.value} COP</p>
        </div>
      </div>
      <hr className="line_food" />
      <div className="form_food">
        <FormsFood />
      </div>
    </div>
  ));

const mapStateToProps = state => ({
  showDish: state.showDish,
  show_food: state.show_food,
  show_price: state.show_price
});

const mapDispatchToProps = dispatch => ({
  showMenu() {
    dispatch({
      type: "BACK_MENU",
      showMenu: true
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Page_food);
