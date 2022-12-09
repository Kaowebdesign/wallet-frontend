// Core
import React, {FC, memo} from 'react'
import * as Yup from 'yup'
import {Formik} from 'formik'
import clsx from 'clsx'
import {Redirect} from 'react-router-dom'
// Ant Components
import {Row, Tabs} from 'antd'
import {Form, Input} from 'formik-antd'
// Ant Icon
import {LoadingOutlined, SendOutlined} from '@ant-design/icons'
// Style
import './News.scss'
// Hook
import {useNewsEf} from './useNewsEf'
import useScreen from 'use-screen'
// Elements
import {Typography, Button, Container, GetStarted, CardNews, NewsSkeleton} from 'elements'
// Components
import {FormikHandler} from 'components'
// Utils
import {filters} from 'utils'


type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .required('Required')
        .email('Not valid email'),
})

const News: FC<PropsType> = memo(() => {
    const {screenWidth} = useScreen()
    const {
        tab, redirect, loadMoreNews, loadForm, formErrors, isAuth, lang, newsCategories, emptyCategory, news, loading, moreNews, alert,
        handlerTab, handlerSubmit, handlerMore, handlerSetCategory
    } = useNewsEf()

    const isMobile = screenWidth < 767

    const init = {
        email: '',
    }

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>
    if (redirect) return <Redirect to={`/${lang}/${redirect}`}/>
    if (emptyCategory) return <Redirect to={`/${lang}/404`}/>

    return (
        <section className={'news'}>
            <div className={'news__head-area'}>
                <div className="news__head-area-wrapper">
                    <Typography type={"title-72"} color={"primary"} align={"center"}>
                        Our <span className={'news__title-span'}>News</span>
                    </Typography>
                    <Typography className={'news__head-area-text'} type={"text-24"} color={"primary"} align={"center"}>
                        Subscribe and get our newsletter in your inbox
                    </Typography>

                    <Formik onSubmit={handlerSubmit} initialValues={init} validationSchema={SignupSchema}>
                        {({errors, values, setErrors, resetForm}) => (
                            <Form className={'news__form'}>
                                <Form.Item name='email'>
                                    <Input
                                        className={clsx( 'input-item', 'news__input', {'subscribe-form__input': isMobile})}
                                        size={'large'}
                                        name='email'
                                        placeholder='E-mail'
                                        disabled={loadForm}
                                        addonAfter={
                                            <Button
                                                type={"submit"}
                                                size={"icon"}
                                                color={"secondary"}
                                                className={'left-radius'}
                                                loaderPosition={"center"}
                                                variant={"contained"}
                                                loader={
                                                    loadForm
                                                        ? () => <LoadingOutlined className={'sign__loader-icon'} spin/>
                                                        : null
                                                }
                                            >
                                                {
                                                    isMobile
                                                        ? <SendOutlined />
                                                        : <Typography type={"text-20"}>Subscribe</Typography>

                                                }
                                            </Button>
                                        }
                                    />
                                </Form.Item>
                                <FormikHandler data={formErrors} reset={alert && alert.type === "success"}/>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <Container type={"div"} className={'news__container'}>
                <Tabs activeKey={tab} className={'news__tabs'} tabPosition={'top'} onChange={handlerTab} centered>
                    <Tabs.TabPane tab={<Typography type={"text-22"} style={{padding: '0 10px', marginBottom: 10}} color={"secondary"}>All news</Typography>} key="all">
                        { !loading ?
                            <div className={'news__tab-wrapper'}>
                                <Row className={'news__item-wrapper'}>
                                    {
                                        news && news.items.map((news, key) =>
                                            <CardNews lang={lang} full={key === 0 && screenWidth >= 768} key={news.id} data={news} onClick={() => handlerSetCategory(filters.toUrlFriendly(news.category))}/>)
                                    }
                                </Row>
                            </div>
                            : <NewsSkeleton />
                        }
                    </Tabs.TabPane>
                    {
                        newsCategories.map((category, key) =>
                            <Tabs.TabPane tab={<Typography type={"text-22"} style={{padding: '0 10px', marginBottom: 10}} color={"secondary"}>{ category }</Typography>} key={ filters.toUrlFriendly(category) }>
                                <div className={'news__tab-wrapper'}>
                                    <Row className={'news__item-wrapper'}>
                                        {
                                            news && news.items.map((news, key) =>
                                                <CardNews lang={lang} full={key === 0 && screenWidth >=768} key={news.id} data={news} currentCategory={true}/>)
                                        }
                                    </Row>
                                </div>
                            </Tabs.TabPane>
                        )
                    }
                </Tabs>

                <div className={'about__news-btn-wrapper'}>
                    {
                        moreNews
                            ?
                                <Button
                                    style={{width: 204}}
                                    color={"secondary"}
                                    variant={"outlined"}
                                    loader={
                                        loadMoreNews
                                            ? () => <LoadingOutlined className={'sign__loader-icon'} spin/>
                                            : null
                                    }
                                    loaderPosition={"center"}
                                    onClick={handlerMore}
                                >
                                    Load more news
                                </Button>
                            : null
                    }
                </div>
            </Container>
            
            <GetStarted
                url={`/${lang}/signin`}
                title={'Ready to get started?'}
                text={'Create an account in just'}
                textTran={'a few minutes'}
            />
        </section>
    )
})

export default News
