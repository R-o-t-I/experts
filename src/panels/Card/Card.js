import React from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {
    Avatar,
	Panel,
	PanelHeader,
    Title,
    Text,
    Div,
    Progress,
    CellButton,
    Separator,
    SimpleCell,
    Spacing,
    Footer,
    Gradient,
    Button,
    Snackbar
} from '@vkontakte/vkui/';
import {
    Icon28MarketOutline,
    Icon28StatisticsOutline,
    Icon28SortOutline,
    Icon28AllCategoriesOutline,
    Icon28CopyOutline
} from '@vkontakte/icons';

class Card extends React.Component {
    constructor (props) {
        super(props);

		this.state = {
            snackbar: null,
            user: null
        };
        this.openBaseWithAction = this.openBaseWithAction.bind(this);
        this.copy = this.copy.bind(this)
	}

    openBaseWithAction () {
        if (this.state.snackbar) return;
        this.setState({ snackbar:
            <Snackbar
                onClose={() => this.setState({ snackbar: null })}
                //action={<Link href="https://vk.com/skreglis" target="_blank">Написать разработчику</Link>}
                before={<Avatar size={28} style={{ background: 'var(--accent)' }}><Icon28CopyOutline width={20} height={20} fill="#fff" /></Avatar>}
            >
                ID ВКонтакте скопирован в буфер обмена
            </Snackbar>
        });
    }

    async componentDidMount () {
        const { fetchedUser } = this.props;
        console.log(fetchedUser)
        //const dataToken = await bridge.send("VKWebAppGetAuthToken", {"app_id": 7536939, "scope": "experts"});
        //console.log (dataToken)
        const { data } = await axios.get('https://api.skyreglis.studio/api/rest/experts/getInfo?userIds=' + fetchedUser.id);
        console.log(data);
        this.setState ({user: data.items[0].info})
    }

    copy () {
        const { fetchedUser } = this.props;
        bridge.send("VKWebAppCopyText", {"text": `${fetchedUser.id}` });
    }

	render () {
		const {
			id,
			go,
            fetchedUser
		} = this.props;

        const {
            user
        } = this.state

		return (
		<Panel id={id}>
			<PanelHeader>
                Карточка
            </PanelHeader>
            {fetchedUser &&
                <Gradient style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 32,
                }}>
                    <div style={{position: "relative"}}><Avatar size={96} src={fetchedUser.photo_200} /><div className="position-card">{user && user.position}</div></div>
                    <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</Title>
                    <Text style={{ marginBottom: 16, color: 'var(--text_secondary)' }}>ID ВКонтакте: {fetchedUser.id}</Text>
                    <Button
                        before={<Icon28CopyOutline width={24} height={24} />}
                        size="m"
                        mode="secondary"
                        onClick={this.copy}
                        onClick={this.openBaseWithAction}
                    >
                        Копировать ID
                    </Button>
                    {/*
                    <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>В экспертах с $dat</Text>
                    <Div className="stat-card">
                        <div>Вы оценили $n записи на этой неделле</div>
                        <div style={{marginTop: 10}}><Progress style={{height: 5, borderRadius: 20}} value={40} /></div>
                        <div style={{textAlign: "end", marginTop: 5}}>700</div>
                    </Div>
                    */}
                </Gradient>
            }
            <div>
                <SimpleCell
                    multiline
                    disabled
                    indicator={user && user.actions_count}
                    before={<Icon28SortOutline />}
                >
                    Оценено постов за все время:
                </SimpleCell>
                <SimpleCell
                    multiline
                    disabled
                    indicator={user && user.topic_name}
                    before={<Icon28AllCategoriesOutline />}
                >
                    Ваша тематика:
                </SimpleCell>
                <SimpleCell
                    multiline
                    disabled
                    indicator={user && user.position}
                    before={<Icon28StatisticsOutline />}
                >
                    Ваша позиция в топе:
                </SimpleCell>
                <Spacing separator="center" size={8}/>
                <CellButton href="https://vk.com/market-182611749" target="_blank" before={<Icon28MarketOutline />}>Магазин</CellButton>
                {/*<CellButton onClick={go} data-to="rating" before={<Icon28StatisticsOutline />}>Рейтинг</CellButton>*/}
            </div>
            <Footer onClick={go} data-to="info">
                О сервисе
            </Footer>
            {this.state.snackbar}
		</Panel>
		);
	}
}

Card.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
    }),
};

export default Card;