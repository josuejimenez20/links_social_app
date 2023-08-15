import { Route, Routes } from "react-router-dom";
import RenderPosts from "../../components/home/renderRepost/RenderPosts";

export default function SubHomeRouter() {

    return (<>


        <Routes>

            <Route path="/posts" element={<RenderPosts />} />

        </Routes>


    </>)

}