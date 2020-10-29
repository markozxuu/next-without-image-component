// Packages
import Unsplash from "unsplash-js";
import Banner from "../components/banner";
import Card from '../components/card';


// Components
import Layout from '../components/Layout';

const Index = ({ collections }) => {
    return (
        <Layout>
            <h1 style={{ marginBottom: 20, fontSize: '1.8em' }}>Next without image component</h1>
            <Banner />
           {collections.map((item) => (
               <Card key={item.id} {...item} />
           ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const unsplash = new Unsplash({ accessKey: process.env.TOKEN_UNSPLASH });
    const data = await unsplash.users.collections('markozxuu');
    const collections = await data.json();
    return {
        props: {
            collections,
        }
    }
}

export default Index;
