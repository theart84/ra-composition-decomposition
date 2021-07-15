import DisorderedList from "../DisorderedList/DisorderedList";
import Link from "../Link/Link";
import ListItem from "../ListItem/ListItem";
import Logo from '../Logo/Logo'
import { newsLists, newsArray, logoURL } from "../../fakeData/news";

export const TopNews = () => {
  return (
    <>
      <div className="news-top-navbar">
        <DisorderedList items={newsLists} className="news-top-list news-top-list__horizontal">
          {(items) =>
            items.map((item) => (
              <ListItem className="news-top-item">
                <Link key={Math.random()} className="news-top-link" link="/">
                  {item}
                </Link>
              </ListItem>
            ))
          }
        </DisorderedList>
      </div>
      <div className="news-top-list">
      <DisorderedList items={newsArray} className="news-top-list">
        {(items) =>
          items.map((item) => (
            <ListItem className="news-top-item">
              <Logo logoURL={logoURL}/>
              <Link key={Math.random()} className="news-top-link" link="/">
                {item}
              </Link>
            </ListItem>
          ))
        }
      </DisorderedList>
      
    </div>
    </>
  );
};
