'use client';

import React, { useState, useEffect, Suspense } from 'react';
import {
    Card,
    Button,
    Statistic,
    Descriptions,
    Row,
    Col,
    List,
    Spin,
    Divider,
    Modal,
    Input,
} from 'antd';
import Image from 'next/image'
import { abbreviate, convertCamelToHuman, getExplorerUrl } from '../util';
import { ACTIVE_CHAIN, EXAMPLE_OFFERS, STAT_KEYS } from '../util/constant';
import { LineChart, PieChart } from 'react-chartkick'

import 'chartkick/chart.js'
import { purchaseContract } from '../util/listingContract';
import { createOffer } from '../util/tableland';



const ListingDetail = ({ item }) => {
    const [loading, setLoading] = useState(false)
    const [offerData, setOfferData] = useState(EXAMPLE_OFFERS)
    const [showOfferModal, setShowOfferModal] = useState(false)
    const [amount, setAmount] = useState(0)

    const { connect, provider, wallet, logout } = useWallet()

    if (!item) {
        return <Spin size='large' />
    }

    const createdAddress = item.createdBy.toString()
    console.log('createdAddress', createdAddress)

    async function makePurchase() {
        setLoading(true)
        try {
            const res = await purchaseContract(provider.signer, item.address, item.price)
            console.log('purchase', res)
        } catch (e) {
            console.error('error purchasing', e)
        } finally {
            setLoading(false)
        }
    }

    async function makeOffer() {
        if (!amount || amount <= 0) {
            alert('Please enter an offer more than 0' + ACTIVE_CHAIN.symbol)
            return
        }
        setLoading(true)

        const offer = {
            amount,
            listingId: item.id,
            createdAt: Date.now(),
            createdBy: wallet.account
        }
        try {
            const res = await createOffer(offer)
            console.log('make offer', res)
        } catch (e) {
            console.error('error making offer', e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="listing-detail-page">
            <Card title={<span style={{ color: "green" }}>For Purchase</span>}>
                <h1>{item.name}</h1>
                <h3>{item.description}</h3>
                <Divider />
                <Row>

                    <Col span={12}>
                        <section className="product-images">
                            <Image width={450} height={150} src={item.image} alt={item.name} />
                            <br />
                            <br />
                        </section>
                        <section className="product-details">
                            <Statistic
                                style={{ display: 'inline-block', marginRight: 32 }}
                                title={"Created by"}
                                value={
                                    <a href={getExplorerUrl(createdAddress)} target="_blank">
                                        {abbreviate(createdAddress)}
                                    </a>
                                }
                            />

                            {STAT_KEYS.map((key, i) => {
                                return (<span
                                    key={i}
                                >
                                    <Statistic
                                        style={{ display: 'inline-block', marginRight: 32 }}
                                        title={convertCamelToHuman(key)}
                                        value={item[key]} />
                                </span>
                                )
                            })}
                        </section>
                    </Col>
                    <Col span={12}>

                        <Card title="Purchase">
                            <section className="product-actions">
                                <p>
                                    <b>Price: {item.price} {item.currency}</b>
                                </p>
                                <p>
                                    Purchase this dataset or make an offer.
                                </p>
                                <br />
                                <Button
                                    loading={loading}
                                    disabled={loading}
                                    onClick={makePurchase}
                                    type="primary">Buy Now</Button>&nbsp;
                                {/* <Button type="default">Add to Cart</Button> */}
                                <Button
                                    disabled={loading}
                                    onClick={() => setOfferVisible(!offerVisible)} type="link">Make an Offer</Button>
                            </section>
                        </Card>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col span={24}>
                        <h3>Recent Offers</h3>
                        {/* https://chartkick.com/react */}

                        {/* Chart */}
                        <LineChart data={offerData} />


                    </Col>
                </Row>
            </Card>


            {/* TODO: enable offer */}
            <Modal
                title="Make an offer on this dataset"
                open={showOfferModal}
                okText="Make offer"
                onOk={makeOffer}
                confirmLoading={loading}
                onCancel={() => setShowOfferModal(false)}
            >
                <h5>{item?.name}</h5>
                <p>Make an offer for this dataset:</p>

                <Input
                    type="number"
                    placeholder={`Enter amount (${ACTIVE_CHAIN.symbol})`}
                    value={amount}
                    onError={(e) => console.log('error', e)}
                    onChange={(e) => setAmount(e.target.value)}
                />

            </Modal>


        </div>
    );
};

export default ListingDetail;