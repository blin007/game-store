import React, { useEffect, useState } from 'react'
import '../../styles/Purchases.css'
import { db } from '../../db/firebase'
import { useSelector } from 'react-redux'
import PurchasedItem from './components/PurchasedItem'
import { motion } from 'framer-motion'

function Purchases({ pageVariants }) {
  const user = useSelector((state) => state.user)
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    if (user.email){
      db
        .collection('users')
        .doc(user?.uid)
        .collection('purchases')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => {
          //returns all purchases as docs
          setPurchases(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(), //data corresponds to all of the fields in the purchases collection
          })))
        })
    } else {
      setPurchases([])
    }


  }, [user])

  return (
    <motion.div 
      className="purchases"
      variants={pageVariants}
      initial={pageVariants?.hidden}
      animate={pageVariants?.visible}
      exit={pageVariants?.exit}
    >
        <h1 className='purchase_title'>Purchases</h1>
        <div className="purchases_container">
          {purchases?.map(item => (
            <PurchasedItem item={item}/>
          ))}
        </div>
    </motion.div>
  )
}

export default Purchases