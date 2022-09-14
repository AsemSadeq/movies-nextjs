import { GetServerSidePropsContext, GetServerSideProps, NextPage } from 'next'
import { API_ENDPOINTS, PersonIR } from 'shared'
import { Person } from 'src/components'

const PersonPage: NextPage<PersonIR> = (props) => {
  return (
    <Person {...props}/>
  )
}

export const getServerSideProps: GetServerSideProps<PersonIR> = async (ctx: GetServerSidePropsContext) => {
  const res = await fetch(API_ENDPOINTS.PERSON_API(ctx.query.id as string))

  const data = await res.json()

  if (data.success === false)
    return {
      notFound: true
    }

  return { props: { ...data } }
}

export default PersonPage
