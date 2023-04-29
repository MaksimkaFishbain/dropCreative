import React, {FC} from 'react';

const Home:FC = () => {
    return (
        <div>
            <header></header>
            <main>
                <div className="main__content">
                    <ul className="main__popular">
                        <li className="post"></li>
                        <li className="post"></li>
                        <li className="post"></li>
                    </ul>
                </div>
            </main>
            <footer>footer</footer>
        </div>
    );
};

export default Home;


