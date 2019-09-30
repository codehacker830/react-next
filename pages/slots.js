import Head from 'next/head';

//import page
import SlotsPage from '../src/views/Slots';

const Slots = () => (
    <div style={{minWidth: '1300px'}}>
        <Head>
            <title>Prometheus Template</title>
            <title>Prometheus Template</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        </Head>
        <SlotsPage />
    </div>
);

export default Slots;