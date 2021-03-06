import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
    Panel,
    PanelHeader,
    Div,
    Tappable,
    Link,
    Text,
    Separator,
    CellButton
} from '@vkontakte/vkui';

import queryGet from '../functions/query_get.jsx';

import {
    Icon28BasketballBallOutline,
    Icon28BrainOutline,
    Icon28CameraOutline,
    Icon28ComputerOutline,
    Icon28GameOutline,
    Icon28GiftOutline,
    Icon28HistoryBackwardOutline,
    Icon28MasksOutline,
    Icon28MusicOutline,
    Icon28PaletteOutline,
    Icon28PlaneOutline,
    Icon28SkirtOutline,
    Icon28StoryOutline,
    Icon28VideocamOutline
} from '@vkontakte/icons';

class Categories extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    story() {
        const url = 'https://vk.com/skreglis';
        bridge.send('VKWebAppShowStoryBox', {
            'background_type': 'image',
            'url': 'https://psv4.userapi.com/c520036/u154241883/docs/d48/802880e6c978/Istoria_s_dne_776_m_smekha.png?extra=04_lD_LzCeesoDL6FYQtWfXbUd1Qcm5PbXqhJ1yBcEspmu9fBvCGn9o8VOJiRFcjZk1j__Ce-x0Qq3aOWhu-AcqmtL-HhTF-z-VM0e1AoHCubiJm-4JueHF0H8-ljIC-dcOAJDxqg3FplsxvDuRIlXzpuoU',
            'locked': 'true',
            'attachment': {
                'text': 'open',
                'type': 'url',
                'url': url
            }
        });
    }

render () {
    const {
        id,
        go
    } = this.props;

return (
    <Panel id={id}>
        <PanelHeader>Тематики</PanelHeader>
        {
			(queryGet('vk_platform') === 'desktop_web') && (
            <div>
            <Div className="block-categories">
                <Tappable className="tappable" onClick={go} data-to="it">
                    <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28ComputerOutline style={{color: "#66CDAA"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            IT
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="art">
                    <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28PaletteOutline style={{color: "#FFCA86"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Арт
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="games">
                   <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28GameOutline style={{color: "#4BB34B"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Игры
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="cinema">
                   <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28VideocamOutline style={{color: "#792EC0"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Кино
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="music">
                    <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28MusicOutline style={{color: "#3F8AE0"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Музыка
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="science">
                    <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28BrainOutline style={{color: "#EE9374"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Наука
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="sport">
                    <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28BasketballBallOutline style={{color: "#CE5D28"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Спорт
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="style">
                    <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28SkirtOutline style={{color: "#735CE6"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Стиль
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="tourism">
                    <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28PlaneOutline style={{color: "#62639B"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Туризм
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="photo">
                        <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28CameraOutline style={{color: "#E9967A"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Фото
                        </Text>
                    </div>
                </Tappable>

                <Tappable className="tappable" onClick={go} data-to="humor">
                    <div className="block-categorie-pc">
                        <div className="icon-categories"><Icon28MasksOutline style={{color: "#FFA000"}} width={60} height={60} alt=""/></div>
                        <Text weight="regular" className="text-categories">
                            Юмор
                        </Text>
                    </div>
                </Tappable>
                <Link href="https://vk.com/app7789347" target="_blank">
                    <Tappable className="tappable">
                        <div className="block-categorie-pc">
                            <div className="icon-categories"><Icon28HistoryBackwardOutline style={{color: "#66CDAA"}} width={60} height={60} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Старая версия
                            </Text>
                        </div>
                    </Tappable>
                </Link>
            </Div>

                {/*<Div className="tematic-block">
                    <img className="img-tematic-block" src="https://vk.com/images/gift/1136/256.png" />
                    <div className="text-tematic-block">
                        ВКонтакте и «Агуша» запустили благотворительный подарок #ЗаПравоНаСчастье для помощи детям с аутизмом.
                    </div>
                </Div>
                <Separator />
                <Link href="https://vk.com/gifts?act=send&ref=gifts&section=trending&gift=1136" target="_blank"><CellButton onClick={this.story} centered before={<Icon28GiftOutline />}>Отправить подарок</CellButton></Link>*/}

            </div>
            )
        }
        {
            (queryGet('vk_platform') === 'mobile_android'
            || queryGet('vk_platform') === 'mobile_iphone'
            || queryGet('vk_platform') === 'mobile_android_messenger'
            || queryGet('vk_platform') === 'mobile_iphone_messenger'
            || queryGet('vk_platform') === 'mobile_web'
            || queryGet('vk_platform') === 'mobile_ipad') && (
                <div>
                <Div className="block-categories">
                    <Tappable className="tappable" onClick={go} data-to="it">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28ComputerOutline style={{color: "#66CDAA"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                IT
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="art">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28PaletteOutline style={{color: "#FFCA86"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Арт
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="games">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28GameOutline style={{color: "#4BB34B"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Игры
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="cinema">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28VideocamOutline style={{color: "#792EC0"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Кино
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="music">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28MusicOutline style={{color: "#3F8AE0"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Музыка
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="science">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28BrainOutline style={{color: "#EE9374"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Наука
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="sport">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28BasketballBallOutline style={{color: "#CE5D28"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Спорт
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="style">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28SkirtOutline style={{color: "#735CE6"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Стиль
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="tourism">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28PlaneOutline style={{color: "#62639B"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Туризм
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="photo">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28CameraOutline style={{color: "#E9967A"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Фото
                            </Text>
                        </div>
                    </Tappable>
    
                    <Tappable className="tappable" onClick={go} data-to="humor">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28MasksOutline style={{color: "#FFA000"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Юмор
                            </Text>
                        </div>
                    </Tappable>
                    <Link href="https://vk.com/app7789347" target="_blank">
                    <Tappable className="tappable">
                        <div className="block-categorie">
                            <div className="icon-categories"><Icon28HistoryBackwardOutline style={{color: "#F19CBB"}} width={40} height={40} alt=""/></div>
                            <Text weight="regular" className="text-categories">
                                Старая версия
                            </Text>
                        </div>
                    </Tappable>
                    </Link>
                </Div>
                
                    {/*<Div className="tematic-block">
                        <img className="img-tematic-block" src="https://vk.com/images/gift/1136/256.png" />
                        <div className="text-tematic-block">
                            ВКонтакте и «Агуша» запустили благотворительный подарок #ЗаПравоНаСчастье для помощи детям с аутизмом.
                        </div>
                    </Div>
                    <Separator />
                    <Link href="https://vk.com/gifts?act=send&ref=gifts&section=trending&gift=1136" target="_blank"><CellButton onClick={this.story} centered before={<Icon28GiftOutline />}>Отправить подарок</CellButton></Link>*/}
                </div>
            )
        }
        </Panel>
        );
    }
}

export default Categories;