import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info"
import Circle from "@mui/icons-material/Circle"

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets-wrapper">
                <div className="widgets-header">
                    <h2>Linked-In News</h2>
                    <InfoIcon />
                </div>
                <div className="widgets-articles">
                    <div className="widget-article">
                        <Circle className="blue-dot mm" />
                        <h4>Jeff Bazos</h4>
                    </div>
                    <p className="straight">Jeff Bazos says that cars will be obselete in the ...</p>
                </div>

                <div className="widgets-articles">
                    <div className="widget-article">
                        <Circle className="blue-dot mm" />
                        <h4>Tesla</h4>
                    </div>
                    <p className="straight">Tesla's new model release has caused an uproar...</p>
                </div>

                <div className="widgets-articles">
                    <div className="widget-article">
                        <Circle className="blue-dot mm" />
                        <h4>Redux</h4>
                    </div>
                    <p className="straight">Redux founder has decided to make Redux private and sell it to Google...</p>
                </div>
            </div>
        </div>
    )
}

export default Widgets