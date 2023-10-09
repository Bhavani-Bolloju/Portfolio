import React from "react";
import classes from "./ShopCartDetailPage.module.scss";

import shopCart1 from "../../../assets/project/e-commerce/shop-cart_LS.png";
import shopCart2 from "../../../assets/project/e-commerce/shopcart2.png";
import productList from "../../../assets/project/e-commerce/productList.png";
import filterImage from "../../../assets/project/e-commerce/products_filter.png";

import savedItems from "../../../assets/project/e-commerce/save_items.png";

import cartItems from "../../../assets/project/e-commerce/cart_items.png";

import userAuth from "../../../assets/project/e-commerce/user_authentication.png";

import detailsPage from "../../../assets/project/e-commerce/detail_page.png";

import HeadingTertiary from "../../ui/HeadingTertiary";
import SecondaryHeading from "../../ui/SecondaryHeading";

import { SubtitleHeading, SupportingHeading } from "../../ui/Headings";

import { Item } from "../../ui/UIComponents";

import { ButtonLink } from "../../ui/ButtonOutline";
import ImagesContainer from "../../ui/ImagesContainer";

function ShopCartDetailPage() {
  return (
    <section className={classes["shopCart"]}>
      <SecondaryHeading>shop cart</SecondaryHeading>
      <ImagesContainer image1={shopCart1} image2={shopCart2} />

      <div className={classes.overview}>
        <HeadingTertiary>Project Overview</HeadingTertiary>
        <ul>
          <Item>
            Developed a fully responsive e-commerce website using React.js.
          </Item>
          <Item>
            Integrated a 3rd-party API to fetch and categorize product data.
          </Item>
          <Item>
            Implemented user-friendly product filtering based on different
            categories.
          </Item>
          <Item>
            Enabled users to add items to their shopping cart and save products
            for later.
          </Item>
          <Item>Ensured secure user authentication through Firebase.</Item>
          <Item>
            Required user registration for order placement, enhancing security.
          </Item>
          <Item>
            Created detailed product pages with cart item management
            functionality.
          </Item>
        </ul>
      </div>
      <div className={classes.features}>
        <HeadingTertiary>key features</HeadingTertiary>
        <ul>
          <Item>
            <span className={classes.highlight}>
              E-Commerce Functionality:{" "}
            </span>
            Browse and purchase products from various categories.
          </Item>
          <Item>
            <span className={classes.highlight}>Product Filtering: </span>
            Easily find products by filtering based on different categories.
          </Item>
          <div className={classes.images}>
            <img src={filterImage} alt="" />
          </div>
          <Item>
            <span className={classes.highlight}>Save Items for Later: </span>
            Save selected items to revisit later.
          </Item>
          <div className={classes.images}>
            <img src={savedItems} alt="" />
          </div>
          <Item>
            <span className={classes.highlight}>Shopping Cart: </span>
            Add and manage items in the cart.
          </Item>
          <div className={classes.images}>
            <img src={cartItems} alt="" />
          </div>
          <Item>
            <span className={classes.highlight}>User Authentication: </span>
            Secure user registration for personalized shopping.
          </Item>
          <div className={classes.images}>
            <img src={userAuth} alt="" />
          </div>
          <Item>
            <span className={classes.highlight}> Detailed Product Pages: </span>
            View detailed product information and images.
          </Item>
          <div className={classes.images}>
            <img src={detailsPage} alt="" />
          </div>
        </ul>
      </div>
      <div className={classes.technologies}>
        <HeadingTertiary>technologies used</HeadingTertiary>
        <ul>
          <li>react js</li>
          <li>router dom</li>
          <li>swr</li>
          <li>tailwind</li>
        </ul>
      </div>
      <div className={classes.challenges}>
        <HeadingTertiary>challenges faced</HeadingTertiary>
        <div>
          <SubtitleHeading>
            01. Data Organization and Presentation:
          </SubtitleHeading>
          <SupportingHeading>Description: </SupportingHeading>
          <p>
            The data fetched from the 3rd-party API was not structured
            category-wise, making it difficult to present products to users and
            filter data based on their chosen category.
          </p>

          <SupportingHeading>Challenges faced and solution:</SupportingHeading>
          <ul>
            <Item>
              Implemented a reduce method to organize the data into an array of
              category names, followed by products corresponding to each
              category.
            </Item>
            <Item>
              Utilized Flexbox to efficiently display the categorized products,
              where each category's name served as a title, followed by the
              respective products.
            </Item>
            <Item>
              Enhanced user experience by presenting data in an organized and
              user-friendly manner setting the foundation for future filtering
              and sorting functionalities based on user-selected categories.
            </Item>
            <div className={classes.codeSnippet}>
              <img src={productList} alt="" />
            </div>
            <Item>
              You can find link to the code snippet{" "}
              <a
                href="https://github-production-user-asset-6210df.s3.amazonaws.com/100474477/272550806-effe9a3d-a13f-4098-bbc4-ad530285f7c5.png"
                target="_blank"
              >
                here
              </a>
            </Item>
          </ul>
        </div>
        <div>
          <SubtitleHeading>
            02. Cart Management and Synchronization
          </SubtitleHeading>
          <SupportingHeading>Description: </SupportingHeading>
          <p>
            Implementing cart management functionality posed several challenges,
            including adding, removing, and saving product items. The goal was
            to provide users with separate pages to view their cart items and
            saved items. Additionally, maintaining cart data consistently across
            user sessions, including updates upon page refresh or user login,
            presented a complex task.
          </p>

          <SupportingHeading>Challenges faced and solution:</SupportingHeading>
          <ul>
            <Item>
              <span className={classes.highlight}>
                {" "}
                Real-Time Synchronization:{" "}
              </span>{" "}
              Ensuring that the cart status remained up-to-date and synchronized
              across Redux state management and Firebase required a seamless
              solution. This involved managing changes in real-time, such as
              when users added or removed items.
            </Item>
            <Item>
              <span className={classes.highlight}>Action Creator Thunks: </span>
              To achieve this, i used custom action creators called "thunks."
              These thunks acted as messengers between the app, Redux (our data
              manager), and Firebase. They made sure that changes from one side
              were quickly mirrored on the other.
            </Item>
            <Item>
              <span className={classes.highlight}>Firebase Integration: </span>
              Firebase was a crucial part of my solution. It allowed me to keep
              the cart updated in real-time, even if users logged out or
              refreshed their page.
            </Item>
            <Item>
              <span className={classes.highlight}>User Experience: </span>
              Goal was to make managing the cart easy for users. They could add,
              remove, or save items without worrying about their data being lost
              or out of sync.
            </Item>
          </ul>
        </div>
      </div>
      <div className={classes.enhancements}>
        <HeadingTertiary>future enhancements</HeadingTertiary>
        <div>
          <SubtitleHeading>01. Advanced Product Search</SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p>
            As part of future enhancements to the website, I plan to introduce
            an advanced product search feature. This feature will empower users
            to quickly and efficiently find the products they're looking for by
            using search keywords.
          </p>
          <SupportingHeading>key components:</SupportingHeading>
          <ul>
            <Item>
              A search bar will be added to the website's header for easy
              access.
            </Item>
            <Item>
              Existing filtering and sorting options will be enhanced to
              complement the new search feature.
            </Item>
            <Item>
              Providing users with a more efficient and satisfying experience.
              It will help users discover products quickly and precisely.
            </Item>
          </ul>
        </div>

        <div>
          <SubtitleHeading>02. User Product Reviews</SubtitleHeading>
          <SupportingHeading>Description:</SupportingHeading>
          <p>
            I plan to introduce a user product review system to further enhance
            the website's user engagement and trustworthiness. Users will have
            the ability to leave reviews and ratings for products they have
            purchased. Each product detail page will include a dedicated review
            section where users can share their experiences and insights
          </p>
          <SupportingHeading>key components:</SupportingHeading>
          <ul>
            <Item>
              A user-friendly review form will be implemented for customers to
              submit their reviews and ratings.
            </Item>
            <Item>
              A five-star rating system will be introduced to provide users with
              a quick overview of product quality.
            </Item>
            <Item>
              This will help potential customers make purchasing decisions based
              on the experiences of others.
            </Item>
          </ul>
        </div>
      </div>
      <div className={classes.btns}>
        <ButtonLink href="https://e-commerce-ac3a5.web.app/">
          Live Demo
        </ButtonLink>
        <ButtonLink href="https://github.com/Bhavani-Bolloju/E-commerce">
          GitHub
        </ButtonLink>
      </div>
    </section>
  );
}

export default ShopCartDetailPage;
