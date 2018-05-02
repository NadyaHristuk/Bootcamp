switch($method) {
    case 'PUT':
        header('HTTP/1.1 405 Method Not Allowed');
        break;

    case 'DELETE':
        $this->delete_contact($name);
        break;

    case 'GET':
        $this->display_contact($name);
        break;

    default:
        header('HTTP/1.1 404 Not Found');
        break;
}

