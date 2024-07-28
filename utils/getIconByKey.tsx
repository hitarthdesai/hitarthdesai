import { TechnologyTopic } from "@/schemas/repository";
import { ReactNode } from "react";

import Nextauth from "../public/nextauth.svg";
import Css from "../public/css.svg";
import Firebase from "../public/firebase.svg";
import Mui from "../public/mui.svg";
import Next from "../public/next.svg";
import React from "../public/react.svg";
import Js from "../public/js.svg";
import Mantine from "../public/matine.svg";
import Django from "../public/django.svg";
import Html from "../public/html.svg";
import Python from "../public/python.svg";
import Stripe from "../public/stripe.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type IconKeys = (typeof TechnologyTopic)[keyof typeof TechnologyTopic];
type IconsMap = Record<IconKeys, string | StaticImport>;

export const Icons: IconsMap = {
  [TechnologyTopic.Css]: Css,
  [TechnologyTopic.Firebase]: Firebase,
  [TechnologyTopic.MaterialUi]: Mui,
  [TechnologyTopic.Nextjs]: Next,
  [TechnologyTopic.Reactjs]: React,
  [TechnologyTopic.Javascript]: Js,
  [TechnologyTopic.MantineUi]: Mantine,
  [TechnologyTopic.NextAuth]: Nextauth,
  [TechnologyTopic.Stripe]: Stripe,
  [TechnologyTopic.Django]: Django,
  [TechnologyTopic.Html]: Html,
  [TechnologyTopic.Python]: Python,
  [TechnologyTopic.Js]: Js,
};
