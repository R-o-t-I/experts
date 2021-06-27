import React from 'react';
import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Gallery,
    Div,
    Link
} from '@vkontakte/vkui';

import art7 from './img/art7.jpg';
import art8 from './img/art8.jpg';
import art9 from './img/art9.jpg';
import art10 from './img/art10.jpg';
import art11 from './img/art11.jpg';
import art12 from './img/art12.jpg';
import art13 from './img/art13.jpg';
import art14 from './img/art14.jpg';
import art15 from './img/art15.jpg';
import art16 from './img/art16.jpg';
import art17 from './img/art17.jpg';
import art18 from './img/art18.jpg';
import art19 from './img/art19.jpg';
import art20 from './img/art20.jpg';
import art21 from './img/art21.jpg';
import art22 from './img/art22.jpg';
import art23 from './img/art23.jpg';
import art24 from './img/art24.jpg';
import art25 from './img/art25.jpg';
import art26 from './img/art26.jpg';
import art27 from './img/art27.jpg';
import art28 from './img/art28.jpg';
import art29 from './img/art29.jpg';
import art30 from './img/art30.jpg';
import art31 from './img/art31.jpg';

import art32 from './img/art1.png';
import art33 from './img/art2.png';
import art34 from './img/art3.png';
import art35 from './img/art4.png';


class AssessmentRulesArt extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

render () {
    const {
        id,
        go,
    } = this.props;

return (
    <Panel id={id} separator={false}>
        <PanelHeader
            left={<PanelHeaderBack onClick={go} data-to="art"/>}
        >
            Оценка постов
        </PanelHeader>
            <Div>
                <h4>Привет вновь прибывшим!</h4>
                Рады видеть всех ценителей искусства и художников. Чтобы вам было легче разобраться и не потеряться, мы коллективно написали статьи <Link href="https://vk.com/@vkexpertsart-voprosy-i-otvety" target="_blank">«Вопросы и ответы»</Link> и <Link href="https://vk.com/@vkexpertsart-pravila-ocenki" target="_blank">«Правила оценки»</Link>, ибо <Link href="https://vk.com/@vkexperts-kto-takie-eksperty-vkontakte" target="_blank"><b>базовый документ FAQ</b></Link> не покрывает даже части вопросов новичков.
            </Div>
            <div className="cat-rulers-block">
            <b>(?) Словарик непонятных слов:</b>
                <br></br><em>Апвот/Апвоут</em> — ваша положительная оценка — стрелка ввверх.
                <br></br><em>Даунвот/Даунвоут</em> — ваша отрицательная оценка — стрелка вниз.
                <br></br><em>Ачивка</em> — достижение, которое дают эксперту в его карточку.
                <br></br><em>Агрегатор</em> — сообщество, не являющееся авторским. Обычно это подборки чужих работ.
                <br></br><em>Шакально,шакализм/Артефакты сжатия</em> — это заметные искажения изображения, звука, видео, вызываемые сжатием с потерями.
                <br></br><em>Срисовка</em> — копия контуров чужой работы или фото без непосредственной обводки.
                <br></br><em>Обводка</em> — наметка контуров поверх фотографии.
                <br></br><em>Обмазка</em> — копирование пятен света, цвета и тени поверх фотографии с незначительной деформацией оригинала.
                <br></br><em>Редрав</em> — переработка изображения в собственной стилистике.
                <br></br><em>Баян</em> — многократно опубликованные в интернете шутки или информация.
                <br></br><em>Буст, бустить</em> — накрутка апвотов в корыстных целях или по чьей-то просьбе.
                <br></br><em>Нейросеть/алгоритмы</em> — машина, анализирующая посты пользователей вконтакте.
                <br></br><em>Флуд</em> — одно и то же сообщение кучу раз, атака картинками и стикерами в чате, порно и прочее, если их кидают не в качестве примера, бага, ошибки.
                <br></br><em>Спам</em> — это пиар, реклама, просьбы поставить лайк и проч.
                <br></br><em>Оффтоп</em> — обсуждение НЕ смежных с искусством тем. Особенно это касается школы, хотелось бы избегать подобных тем в официальном чате.
            </div>
            <br></br><br></br>
            <img
                className="img-chat-rulers"
                type="image"
                src={art7}
            />
            <Div>
                <h4>Что апвоутить:</h4>
                — Качественно оформленный пост: изображения без артефактов сжатия*, без грубых и частых матов, слишком большого количества тегов или лишнего капслока, бесполезных изображений вроде белых квадратов и полосок, несвязных эстетик. Фотография рисунка должна быть качественной, в меру возможностей современных смартфонов. Мы так же одобряем качественные скетчи с подобающим оформлением. фото не должно быть размытым, в темноте, под углом, с ненужными и посторонними предметами в кадре.
            </Div>
            <img
                className="img-chat-rulers"
                type="image"
                src={art8}
            />
            <Div>
            — Оригинальное произведение: продукт самостоятельного творчества автора. Работа не должна являться перерисовкой чужого творчества, кадров из анимационных фильмов и сериалов. Важно, чтобы работа традиционными материалами была выполнена в скетчбуке или на чистой белой бумаге, а не на тетрадных или мятых листках (если это не особая задумка, от которой рисунок смотрится лучше, что встречается редко). Фотография работы должна соответствовать предыдущему пункту.
            <br></br><br></br>— Публикация паблика-агрегатора с указанием автора: художник указан, работы качественные и достойные — апвоут. Указанием автора считаются: текст, прямая ссылка, указание через источник, тег или автор, предложивший пост (если данному человеку принадлежит произведение).
            <br></br><br></br>— Качественные работы художников, хендмейдеров, скульпторов, 3D-моделлеров, дизайнеров, архитекторов, косплееров (если указано, что костюм сделан собственноручно) и т. д. Если коротко — всех, кто связан с творчеством.
            <br></br><br></br>— Уникальный и оригинальный контент. Плохо, если пост гуляет по интернету долгое время и появляется буквально во всех сообществах. Эксперты должны продвигать новые и интересные публикации.
            <h4>Что даунвоутить:</h4>
            — Некачественные публикации с низким разрешением изображений, обильным матом и капслоком, избытком смайликов, наличием лишних изображений вроде белых квадратов или полос.
            <br></br><br></br><em>— Срисовки*, обводки*, обмазки*</em>, плагиат. Подробности о различиях смотрите в посте сообщества <Link href="https://vk.com/wall-29809816_185262" target="_blank">Tutorial Drawing</Link>. Не путайте редравы* и срисовки, это разные вещи. Целью редрава является нарисовать существующую работу/кадр в собственном стиле, срисовки — копирование линий и форм без обучения.
            <br></br><br></br>— Агрегаторов, не указывающих авторов: если пост из предложки, проверьте, кто предложил запись. Часто сами авторы предлагают работы, но не указывают свой ник или имя. Если по странице и роду деятельности понятно, что предложивший не автор, пост получает даунвоут. Переводчик текста на изображении не считается автором, учитывается лишь указание художника.
            <br></br><br></br>— Коммерцию: посты с упоминанием расценок, призывом покупать, обратить внимание на открытые заказы или продажу адопта. Тематическая лента — не платформа для купли-продажи, для этого есть отдельные сайты, группы, разделы. Коммерцией не считаются тексты из разряда: «Это заказ для NN», «Нарисовал коммишку» или «Смотрите, адопт».
            </Div>
            <img
                className="img-chat-rulers"
                type="image"
                src={art9}
            />
            <Div>
            — Оскорбления, грубые насмешки, травлю, призыв к суициду, разжигание вражды к тем или иным группам людей и другие вещи, противоречащие правилам платформы ВКонтакте.
            <br></br><br></br>— Шок-контент. Приведём пример из этой же статьи, который вы встретите ниже вместе с примерами:
            <br></br><br></br>«Это трупы с кишками наружу, ужасающие болезни, поедание персонажей друг другом и проч., а НЕ рисунки с черепами или мрачный стиль. Нужен персонаж, которому сопереживаешь и страдаешь от его боли, и должно быть изображено то, что с ним происходит — вытекают мозги, размотало внутренние органы и прочие оказии. Шок-контент появляется в рекомендациях очень редко и не должен быть в ленте».
            <br></br><br></br>— Порнография и сексуализация: изображение полового акта, фетишизм (футфетиш, бдсм и т. д.). Акцент на определённых частях тела (груди, ягодицах, гениталиях) с явным намерением возбудить зрителя, а не показать эстетику человеческого тела. Учтите, что работы с обнаженными без сексуального подтекста не надо даунвоутить. Например, произведения Микеланджело и Да Винчи с оголенными людьми не пытаются возбудить человека.
            </Div>
            <img
                className="img-chat-rulers"
                type="image"
                src={art10}
            />
            <Div>
                <h4>Что игнорировать:</h4>
                — Публикации с комиксами, главная цель которых рассмешить. Мы не оцениваем такие посты и не ставим даунвоут — это лишь путает алгоритм. При встрече с комиксом, явно относящимся к юмору, следует нажать в меню записи «Выбрать тематику», после чего присвоить тематику «Юмор».
                <br></br><br></br>— Посты чужой тематики. Алгоритм иногда ошибается с тематикой записи. Если вы видите скриншоты из мультфильма/кино/сериала, мем или музыкальную подборку — выставляйте им соответствующие тематики.
                <br></br><br></br>— Темы, которые не нравятся лично вам, но не нарушают правила соцсети ВКонтакте и правила оценки экспертов. Если вы не любите пони, ЛГБТ, фурри (антро) и т. д., не ставьте даунтвоут — пройдите мимо. Помните, что есть другие люди, которым тот или иной, не нарушающий правила, контент может понравиться.
                <br></br><br></br>— Работы, которые сложно назвать плохими или хорошими, но по вашему мнению, пока слабоваты, чтобы попасть в Тематическую ленту. Напомним, что даунвоуты не отнимают охват у админов, лишь снижают частоту появления записи в Тематической ленте (не путайте с Новостной и Умной лентами) у обычных пользователей. Лучше пройти мимо.
                <br></br><br></br>— <em>Баяны*</em>: нет смысла оценивать работы, которые не раз бывали в Тематической ленте или давно гуляют по интернету. Мы за оригинальный и свежий контент.
                <br></br><br></br>— Публикации в закрытых группах. Если вы видите пост в закрытой группе, который получил тематику, то игнорируйте его. Ваш апвоут или даунвоут практически ничего не сделает, но так вы можете навредить алгоритму.
                <br></br><br></br>— Лотереи и конкурсы. Многие лотереи противоречат правилам платформы, призывая подписываться, делать репосты и ставить лайки на записи. Помимо этого мы помогаем в продвижении публикаций, а не мероприятий, которые устраивает художник.
            </Div>
            <img
                className="img-chat-rulers"
                type="image"
                src={art11}
            />
            <Div>
                У экспертов всего 11 категорий, поэтому мы отвечаем не только за «картинки», но и за скульптуру, архитектуру и декоративно-прикладное искусство. Если есть сомнения, отнести ли пост к стилю или фото, можете проконсультироваться в соответствующем экспертном чате или у нас.
            </Div>
            <img
                className="img-chat-rulers"
                type="image"
                src={art12}
            />
            <Div>
                Часто у нас бывают проблемы и с комиксами. Если главная составляющая поста — это юмор, а техническая часть оставляет желать лучшего <Link href="https://vk.com/wall-25336774_42185" target="_blank">(пример)</Link> - стоит отнести это в категорию «юмора», если же комикс имеет эстетический акцент <Link href="https://vk.com/wall-78540052_9714" target="_blank">(пример)</Link> — это к нам.
                <br></br><br></br>Пока мы будем ждать подкатегории — когда-нибудь они появятся. Сейчас мы мечтаем увидеть дополнительно комиксы, декоративно-прикладное искусство, туториалы. Если у вас есть идеи по этому поводу, смело обсуждайте это в чате.
            </Div>
            <img
                className="img-chat-rulers"
                type="image"
                src={art13}
            />
            <Div>
                <h4>Шок-контент.</h4>
                Это трупы с кишками наружу, ужасающие болезни, поедание персонажей друг другом и проч., а НЕ рисунки с черепами или мрачный стиль. Нужен персонаж, которому сопереживаешь и страдаешь от его боли, и должно быть изображено то, что с ним происходит — вытекают мозги, размотало внутренние органы и прочие оказии. Шок-контент появляется в рекомендациях очень редко и не должен быть в ленте.
            </Div>
            <Gallery
                slideWidth="100%"
                className="gallery-faq"
                bullets="dark"
                showArrows
            >
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art32}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art33}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art34}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art35}
                />
            </Gallery>
            <Div>
                Примеры того, что НЕ является шок-контентом (анатомические туториалы в том числе):
            </Div>
            <Gallery
                slideWidth="100%"
                className="gallery-faq"
                bullets="dark"
                showArrows
            >
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art19}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art15}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art16}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art17}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art18}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art14}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art20}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art21}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art22}
                />
            </Gallery>
            <Div>
                <h4>Порнография.</h4>
                "Фап-контент" (если вы увидели картинку и возбудились), манипуляции с половыми органами, секс, фетиши и т.д. — это не ок. Тоже попадается очень редко. Примеры: Первый, Второй, Третий, Четвертый, Пятый, Шестой, Седьмой, Восьмой
                <br></br><br></br>Красота человеческого тела, натура, легкая эротика, мелькнувший половой признак — это ок.
                <br></br><br></br>Если вам неясно, спросите себя: возбудился ли я от этого? Да, мы в курсе, что люди могут возбуждаться на что угодно, но фетиши — это исключение, а не правило. Если они вульгарны и отталкивают, минус на них логичен.
                <br></br><br></br>Спросите себя: стоит ли этот арт стоит прятать от 15-летнего подростка? Кроме того, практика показывает, что мужчин без колебаний определяют в норму или порно, а с девочками могут до утра спорить: облегающая одежда и красивая поза - это разврат? Сжигать ли на костре за распутные соски или это просто натура? Представьте на ее месте мужчину, сразу станет проще.
                <br></br><br></br>Примеры того, что НЕ является порнографией:
            </Div>
            <Gallery
                slideWidth="100%"
                className="gallery-faq"
                bullets="dark"
                showArrows
            >
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art26}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art24}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art25}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art23}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art27}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art28}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art29}
                />
                <img
                    className="img-chat-rulers"
                    type="image"
                    src={art30}
                />
            </Gallery>
            <img
                className="img-chat-rulers"
                type="image"
                src={art31}
                showArrows
            />
            <Div>
                <h4>Как быть тем кто работает традиционно? Заказывать фотосессию своему рисунку?</h4>
                Что касается традиционного искусства, то есть немало достойно оформленных работ: достаточно камеры современного телефона, выправленная контрастность белого и аккуратное расположение рисунка, обычно под прямым углом.
                <h4>Почему именно 100к? Что за глупые цифры, искусство нельзя оценить!</h4>
                Это ориентир для масштаба аудитории. Чьи-то работы лучше откладывать в стол и учиться, чьи-то понравятся друзьям художника, а чьи-то оценят многие. Мы в первую очередь учим алгоритмы и помним о пользователях, которым будет интересно заходить в ленту рекомендаций. С начала проекта мы проделали много работы и надеемся, что новички нам тоже в этом помогут.
                <h4>Статья в процессе создания!</h4>
                <em>За дополнение и обновление спасибо Марку Персенцолову.</em>
            </Div>
        </Panel>
        );
    }
}

export default AssessmentRulesArt;