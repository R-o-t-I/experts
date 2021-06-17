import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	View,
	Epic,
	Tabbar,
	TabbarItem,
	ConfigProvider,
	AdaptivityProvider,
	AppRoot,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import './panels/styles.css';

import General from './panels/General';
import Categories from './panels/Categories';
import Card from './panels/Card/Card';

import Achievements from './panels/AllGeneral/Achievements';
import Stikers from './panels/AllGeneral/Stikers';

import Art from './panels/AllCategories/Art/Art';
import ChatRulesArt from './panels/AllCategories/Art/ChatRulesArt';
import AssessmentRulesArt from './panels/AllCategories/Art/AssessmentRulesArt';
import FaqExpertArt from './panels/AllCategories/Art/FaqExpertArt';

import Cinema from './panels/AllCategories/Cinema';
import Games from './panels/AllCategories/Games';
import Humor from './panels/AllCategories/Humor';
import IT from './panels/AllCategories/IT';
import Music from './panels/AllCategories/Music';
import Photo from './panels/AllCategories/Photo';
import Science from './panels/AllCategories/Science';
import Sport from './panels/AllCategories/Sport';
import Style from './panels/AllCategories/Style';
import Tourism from './panels/AllCategories/Tourism';

import Rating from './panels/Card/Rating';
import Info from './panels/Card/Info';

import { 
	Icon28ArmchairOutline,
	Icon28ServicesOutline,
	Icon28UserSquareOutline
} from '@vkontakte/icons';

const App = () => {
	const [active, setActive] = useState({
        story: 'categories',
        panel: 'categories'
    });
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState();
	const [showTab, setShowTab] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = (e) => {
        setActive({
            story: active.story,
            panel: e.currentTarget.dataset.to
        });
    };

	const onStoryChange = (e) => {
        if (e.currentTarget.dataset.story !== active.story) {
            const id = e.currentTarget.dataset.story;
            setActive({
                story: id,
                panel: id
            });

        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<Epic 
						activeStory={active.story}
						tabbar={
							<Tabbar>
								<TabbarItem
									onClick={onStoryChange}
									selected={active.story === 'general'}
									data-story="general"
									text="Общее"
								>
									<Icon28ArmchairOutline width={28} height={28} />
								</TabbarItem>

								<TabbarItem
									onClick={onStoryChange}
									selected={active.story === 'categories'}
									data-story="categories"
									text="Тематики"
								>
									<Icon28ServicesOutline />
								</TabbarItem>

								<TabbarItem
									onClick={onStoryChange}
									selected={active.story === 'card'}
									data-story="card"
									text="Карточка"
								>
									<Icon28UserSquareOutline />
								</TabbarItem>
							</Tabbar>
						}
					>
						<View
							id="general"
							activePanel={active.panel}
							popout={popout}
						>
							<General 
								id='general'
								go={go}
							/>
							<Achievements
								id="achievements"
								activePanel={active.panel}
								go={go}
							/>
							<Stikers
								id="stikers"
								activePanel={active.panel}
								go={go}
							/>
						</View>

						<View
							id="categories"
							activePanel={active.panel}
							popout={popout}
						>
							<Categories 
								id='categories'
								go={go}
							/>
							<Art
								id='art'
								go={go}
							/>
							<ChatRulesArt
								id='chatRulersArt'
								go={go}
							/>
							<AssessmentRulesArt
								id='assessmentRulesArt'
								go={go}
							/>
							<FaqExpertArt
								id='faqExpertArt'
								go={go}
							/>
							<Cinema
								id='cinema'
								go={go}
							/>
							<Games
								id='games'
								go={go}
							/>
							<Humor
								id='humor'
								go={go}
							/>
							<IT
								id='it'
								go={go}
							/>
							<Music
								id='music'
								go={go}
							/>
							<Photo
								id='photo'
								go={go}
							/>
							<Science
								id='science'
								go={go}
							/>
							<Sport
								id='sport'
								go={go}
							/>
							<Style
								id='style'
								go={go}
							/>
							<Tourism
								id='tourism'
								go={go}
							/>
						</View>
						<View
							id="card"
							activePanel={active.panel}
							popout={popout}
						>
							<Card
								id='card'
								go={go}
								fetchedUser={fetchedUser}
							/>
							<Rating
								id='rating'
								go={go}
								fetchedUser={fetchedUser}
							/>
							<Info
								id='info'
								go={go}
								fetchedUser={fetchedUser}
							/>
						</View>
					</Epic>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;