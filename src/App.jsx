import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Hudson Fernando"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestiae impedit officia vero odio, ex dignissimos, minus, quis molestias praesentium quod ut repellendus minima animi reprehenderit repellat cupiditate eos ab?"
          />

          <Post
            author="Fulano de tal"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestiae impedit officia vero odio, ex dignissimos, minus, quis molestias praesentium quod ut repellendus minima animi reprehenderit repellat cupiditate eos ab?"
          />
        </main>
      </div>
    </div>
  );
};
