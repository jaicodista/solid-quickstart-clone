// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
       <iframe src="https://ivr-call-analytics.s3.us-west-1.amazonaws.com/index.html?phone_number=sip%3A%2B17605477780%40c6-sbc.avaamo.com%3Btransport%3Dtls&amp;test=test&amp;app_key=call_analytics&amp;instance=https%3A%2F%2Fc6.avaamo.com&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoyNzQsImZpcnN0X25hbWUiOiJBdmFhbW8iLCJsYXN0X25hbWUiOiJBZG1pbiIsImFjY2Vzc190b2tlbiI6IjExZGE3M2M1NDAyMTRmNjFhODYyN2ZjYzE1ZTAwNTYxIn0sImluc3RhbmNlIjoiaHR0cHM6Ly9jNi5hdmFhbW8uY29tIiwiY29tcGFueV9pZCI6ODUsImFnZW50X2lkIjoiNjQzNjgiLCJwZXJtaXNzaW9uIjoib3duZXIiLCJleHAiOjE2OTQ0MzA3MDd9.KgsNm0UIitUNmcF1peHnl4OUITdxm8npgsrOe-J-xS8&amp;phone_numbers[]=+17605477780" height="850px" name="developer-call-analytics-iframe" allowfullscreen="allowfullscreen" frameborder="0" allowtransparency="true" webkitallowfullscreen="webkitallowfullscreen" msallowfullscreen="msallowfullscreen" mozallowfullscreen="mozallowfullscreen"></iframe>
      </Body>
    </Html>
  );
}
