import React from "react";
import { Card, Tabs } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import noImage from "../../images/noImage.jpg";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";

const { TabPane } = Tabs;

const SingleProduct = ({ product }) => {
  const { title, images, description, _id  } = product;

  return (
    <>
      <div className="col-md-7">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card
            cover={<img src={noImage} className="mb-3 card-image" />}
          ></Card>
        )}

        <Tabs type="card">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Questions? Please visit our FAQ page
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
        <h1 className="text-center p-3">{title}</h1>
<div className="text-center">

        <StarRating
          // Each star is associated with a product
          // product_id is assigned to name
          name={_id}
          numberOfStars={5}
          rating={2}
          changeRating={(newRating, name) =>
            // rating and product on which
            // this rating is going to be applied
            console.log("newRating", newRating, "name", name)
          }
          // Make star interactable
          isSelectable={true}
          starRatedColor="red"
        />
</div>
        <Card
          actions={[
            <>
              <ShoppingCartOutlined /> <br />
              Add to Cart
            </>,
            <Link  className="text-danger"  to="/">
              <HeartOutlined/> <br /> Add to Wishlist
            </Link>,
          ]}
        >
          <ProductListItems product={product} />
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
