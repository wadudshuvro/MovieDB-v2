'use client';

import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

import Image from 'next/image';

const Modal = ({ children }) => {
	const modalRef = useRef(null);
	const router = useRouter();

	useEffect(() => {
		if (!modalRef.current?.open) {
			modalRef.current?.showModal();
		}
	}, []);

	function onHide() {
		router.back();
	}

	return createPortal(
		<dialog
			ref={modalRef}
			onClose={onHide}
			className="border border-teal-600 flex flex-col p-2 rounded-md dark:bg-body bg-white dark:text-white text-dark w-full max-w-7xl"
		>
			<span onClick={onHide} className="flex justify-end cursor-pointer">
				<Image src="/xmark.svg" alt="close" width={30} height={30} />
			</span>
			{children}
		</dialog>,
		document.getElementById('modal-root-content')
	);
};

export default Modal;
