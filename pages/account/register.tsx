import React from 'react'
import DetailLayout from '../../components/templates/LoginLayout'
import { NextPage, GetStaticProps } from 'next'
import RegisterForm from '../../components/organisms/Account/RegisterForm'
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
            <DetailLayout title={props.title}>
                <RegisterForm />
            </DetailLayout>
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