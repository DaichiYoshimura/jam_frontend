import React from 'react'
import Layout from '../components/templates/Layout'
import Body from '../components/organisms/BackGround'
import { NextPage, GetStaticProps } from 'next'
import SWRegister from '../components/atoms/SWRegister'

// ______________________________________________________
//
type Props = {
  title: string,
  explanation: string
}
// ______________________________________________________
//
const Index: NextPage<Props> = (props: Props) => {

  return (
    <>
      <Layout title={props.title}>
        <div>Welcome To Jam Manager</div>
      </Layout>
      <SWRegister />
    </>
  );

}
// ______________________________________________________
//
export const getStaticProps: GetStaticProps = async () => {

  try {
    return {
      props: {
        title: "index",
        explanation: "Welcome to jam session management app!"
      }
    };
  } catch (err) {
    return {
      props: {
        errors: err.message
      }
    };
  }

}
// ______________________________________________________
//
export default Index;