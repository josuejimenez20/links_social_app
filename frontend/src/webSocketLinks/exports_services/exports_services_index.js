import { auth_exports_index } from './auth_exports/auth_exports_index';
import { posts_index_exports } from './posts_exports/posts_exports_index';
import { message_index_exports } from './messages_exports/messages_exports_index';

export function exports_services_index() {
    auth_exports_index();
    posts_index_exports();
    message_index_exports();
}
