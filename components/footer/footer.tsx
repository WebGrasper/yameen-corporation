"use client";

import { FunctionComponent } from "react";
import styles from "./footer.module.css";
import Heading3 from "@/containers/heading-3/heading-3";
import Heading4 from "@/containers/heading-4/heading-4";
import Para2 from "@/containers/para-2/para-2";
import TextInputField from "@/containers/text-input-field/text-input-field";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Heading5 from "@/containers/heading-5/heading-5";
import Anchor from "@/containers/anchor/anchor";
import Image from "next/image";

/* Defining the inputs that form consists.*/
type Inputs = {
  email: string;
};

/* Schema validation for search form.*/
const schema = yup
  .object()
  .shape({
    email: yup.string().required("Please write your email!"),
  })
  .required();

/* Footer component.*/
const Footer: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: Inputs) => {
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <Heading3
              value={`Proudly rooted in the modern era, we are emerging from Moradabad, the Brass City of India, a hub of Handicrafts and Traditions.`}
              animate={true}
              dark={false}
            />
          </div>
          <div className={styles.inboxContainer}>
            <Heading4
              value={`Perk up your inbox.`}
              animate={true}
              dark={false}
            />
            <Para2
              value={
                "Stay updated on our latest offerings, rich in tradition and artistry, and be the first to know when something new arrives!"
              }
              animate={true}
              showIcon={false}
              dark={false}
            />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <TextInputField
                placeholder={"Enter your email address."}
                iconSrc={"/right-arrow.png"}
                showButton={true} // Show submit button
                register={register} // Pass register function
                name={"email"}
                error={errors.email?.message} // Pass error message
                cursiveFonts={false}
                size={"small"}
                iconWidth={30}
                iconHeight={30}
              />
            </form>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.linksContainer}>
            <div className={styles.subLinksContainer}>
              <Heading5 value={"Shop."} animate={false} dark={false} />
              <Anchor
                value={"Center Tables"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
              <Anchor
                value={"Console Tables"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
              <Anchor
                value={"Garden Decor"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
              <Anchor
                value={"Baskets"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
              <Anchor
                value={"Lanterns"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
              <Anchor
                value={"Wall Decor"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
            </div>
            <div className={styles.subLinksContainer}>
              <Heading5 value={"Enquiries."} animate={false} dark={false} />
              <Anchor
                value={"Contact us"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
            </div>
            <div className={styles.subLinksContainer}>
              <Heading5 value={"Info."} animate={false} dark={false} />
              <Anchor
                value={"About us"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
              <Anchor
                value={"Terms and Conditions"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
              <Anchor
                value={"Returns"}
                animate={false}
                showIcon={false}
                dark={false}
                route={"#"}
              />
            </div>
          </div>
          <div className={styles.paymentMethodContainer}>
            <Heading5 value={"Payment Methods."} animate={false} dark={false} />
            <div className={styles.methodImages}>
              <Image className={styles.icon} src={`/Mastercard.avif`} alt="menu icon" width={40} height={40} />
              <Image className={styles.icon} src={`/Visa.avif`} alt="menu icon" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
