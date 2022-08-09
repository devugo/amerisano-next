import Image from 'next/image';
import styles from '../styles/product.module.scss';
import Product1 from '../images/product1.png';
import Product2 from '../images/product2.png';
import ListIcon from '../images/list-icon.png';
import { useState } from 'react';
import { Modal } from 'antd';
import useWindowDimension from '../hooks/useWindowDimension';

export default function Product({ id, title, subtitle, pack, unitPrice, totalPrice, multiple, minimum }) {
  const [openForm, setOpenForm] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { width } = useWindowDimension()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleForm = () => {
    setOpenForm(!openForm);
  }
  
  return (
    <>
      <div className={styles.product}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles['product-item__desktop']}>
              <div className={styles['image-container']}>
                <Image width={230} height={230} layout='fill'
      objectFit='contain' className="product-img" src={multiple ? Product1 : Product2} alt="product" />
              </div>
              <button className={styles.btn} onClick={showModal}>
                Full Product Details
              </button>
            </div>
            <div className={styles['product-details']}>
              <div className={styles['top']}>
                <div className={styles['product-description']}>
                  <h3 className={styles['product-title']}>{title}</h3>
                  <p className={styles['product-subtitle']}>{subtitle}</p>
                  <p className={styles['product-pack']}>{pack}</p>
                </div>
                <div className={styles['product-price']}>
                  <p className={styles['product-price__title']}>PRICE</p>
                  <p className={styles['product-price__amount']}>
                    <span className={styles['amount']}>{unitPrice}</span>
                    <span className={styles['pack']}>per BOX</span>
                  </p>
                </div>
              </div>

              <div className={styles['product-item__mobile']}>
                <div className={styles['image-container']}>
                  <Image width={100} height={100} layout='fill'
        objectFit='contain' className="product-img" src={multiple ? Product1 : Product2} alt="product" />
                </div>
                <button className={styles.btn} onClick={showModal}>
                  View Full Specs
                </button>
              </div>

              <div className={styles['bottom']}>
                <div className={styles['product-order']}>
                  <div className={styles['product-order__title']}>
                    <p>{ multiple ? 'Enter order by size and quantity' : 'Enter order by quantity'}</p>
                    <button className={`${styles['toggle-order-form']} ${openForm ? styles['open'] : ''}`}  onClick={toggleForm}>
                      { openForm ? 'CLOSE' : 'ADD' }
                    </button>
                  </div>
                  <form className={`${styles['form']} ${openForm ? styles['open'] : ''}`}>
                    <div className={styles['form-row']}>
                      {
                        !multiple ? 
                        <div className={styles['input-container']}>
                          <input className={`${styles['input']} ${styles['no-label']}`} type="type" value="1" />
                        </div>
                        :
                        <>
                          <div className={styles['input-container']}>
                            <span className={styles['label']}>SX</span>
                            <input className={styles['input']} type="type" value="1" />
                          </div>
                          <div className={styles['input-container']}>
                            <span className={styles['label']}>S</span>
                            <input className={styles['input']} type="type" value="1" />
                          </div>
                          <div className={styles['input-container']}>
                            <span className={styles['label']}>M</span>
                            <input className={styles['input']} type="type" value="1" />
                          </div>
                          <div className={styles['input-container']}>
                            <span className={styles['label']}>L</span>
                            <input className={styles['input']} type="type" value="1" />
                          </div>
                          <div className={styles['input-container']}>
                            <span className={styles['label']}>XL</span>
                            <input className={styles['input']} type="type" value="1" />
                          </div>
                        </>
                      }
                    </div>
                  </form>
                  <p className={`${styles['product-order__note']} ${openForm ? styles['open'] : ''}`}>
                    {minimum}
                  </p>
                </div>
                <div className={`${styles['cart-summary']} ${openForm ? styles['open'] : ''}`}>
                  <p className={styles['cart-total']}>
                    <span className={styles['text']}>Total</span>
                    <span className={styles['digit']}>{totalPrice}</span>
                  </p>
                  <p className={styles['cart-total-items']}>4 CASES</p>
                  <button className={styles['add-cart-btn']}>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal width={width > 1023 ? 1000 : 600 } bodyStyle={{padding: 0, borderRadius: 10}} className={styles['amerisano-modal']} visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel} closable={false}>
        <div className={`${styles['features-container']}`}>
          <div className={styles['modal-header']}>
            <p className={styles['close-icon']} onClick={handleCancel}>X</p>
          </div>
          <div className={styles['container']}>
            <div className={styles['main-content']}>
              <div className={styles['main-content-sub']}>
                <div className={styles['header']}>
                  <div className={styles['img-container']}>
                    <Image width={width > 1023 ? 300 : 150} height={width > 1023 ? 300 : 150} alt="product" src={multiple ? Product1 : Product2} />
                  </div>
                  <div className={styles['header-title']}>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
                <p className={styles['pack']}>{pack}</p>
              </div>
            </div>
            <div className={styles['features-container']}>
              <div className={styles['header-title']}>
                <h4>{title}</h4>
                <p>{subtitle}</p>
                <p className={styles['pack']}>{pack}</p>
              </div>
              <ul className={styles['features']}>
                <li className={styles['feature']}>
                  <div className={styles['img-container']}>
                    <Image width={15} height={15} alt="product-feature" src={ListIcon} />
                  </div>
                  <span className={styles['feature-text']}>100% nitrile (non-blend), latex and powder free</span>
                </li>
                <li className={styles['feature']}>
                  <div className={styles['img-container']}>
                    <Image width={15} height={15} alt="product-feature" src={ListIcon} />
                  </div>
                  <span className={styles['feature-text']}>Medical grade 520(k)</span>
                </li>
                <li className={styles['feature']}>
                  <div className={styles['img-container']}>
                    <Image width={15} height={15} alt="product-feature" src={ListIcon} />
                  </div>
                  <span className={styles['feature-text']}>Flexible, smooth fit</span>
                </li>
                <li className={styles['feature']}>
                  <div className={styles['img-container']}>
                    <Image width={15} height={15} alt="product-feature" src={ListIcon} />
                  </div>
                  <span className={styles['feature-text']}>Textured finger for confident grip</span>
                </li>
                <li className={styles['feature']}>
                  <div className={styles['img-container']}>
                    <Image width={15} height={15} alt="product-feature" src={ListIcon} />
                  </div>
                  <span className={styles['feature-text']}>Supreme tactile sensitivity</span>
                </li>
                <li className={styles['feature']}>
                  <div className={styles['img-container']}>
                    <Image width={15} height={15} alt="product-feature" src={ListIcon} />
                  </div>
                  <span className={styles['feature-text']}>Palm thickness 2.7mil</span>
                </li>
                <li className={styles['feature']}>
                  <div className={styles['img-container']}>
                    <Image width={15} height={15} alt="product-feature" src={ListIcon} />
                  </div>
                  <span className={styles['feature-text']}>Color: Light Blue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}