import { socket } from "../../socketConfing/socketConnection";
import { store } from "../../../redux/store/store";
import { fetchGetPosts, fetchGetPostsSuccess } from "../../../redux/slices/posts/postsGetSlices";

export function postsGetAllServices() {

    store.dispatch(fetchGetPosts());

    const OFFSET = 3;

    socket.emit('request_posts_get_page', {OFFSET: OFFSET});
}

export function postsGetAllServicesOn() {
    socket.on('response_posts_get_page', (payload) => {
        // Update the state

        store.dispatch(fetchGetPostsSuccess(payload))
    })
}