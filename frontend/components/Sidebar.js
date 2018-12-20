import Moment from 'react-moment';

const Sidebar = ({ location, time }) => (
    <aside>
        <div>
            <Moment format="dddd, DD MMMM YYYY">{time.value}</Moment>
        </div>
        <div>
            <Moment format="hh:mm">{time.value}</Moment>
            {time.end_value ? <span> - </span> : '' }
            {time.end_value
                ? <Moment format="hh:mm">{time.end_value}</Moment>
                : ''
            }
        </div>
        <div>
            <p>{location}</p>
        </div>

        <style jsx>{`

        aside {
        grid-column: 1/4;
        }

        div {
        border-bottom: 1px solid rgb(224, 227, 227);
        padding: 10px 0;
        }

    `}</style>
    </aside>

);

export default Sidebar;