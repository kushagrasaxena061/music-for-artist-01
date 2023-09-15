'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from 'react-hook-form';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import { useMemo, useState } from "react";
import useRentModal from '@/hooks/useRentModal';
import Modal from "./Modal";
import { categories } from '@/components/Navbar/Categories';
import Counter from "@/components/Inputs/Counter";
import CategoryInput from '@/components/Inputs/CategoryInput';
import CountrySelect from "@/components/Inputs/CountrySelect";
import ImageUpload from '@/components/Inputs/ImageUpload';
import Input from '@/components/Inputs/Input';
import Heading from '../Heading';



enum STEPS {
  TITLE = 0,
  COPYWRITE = 1,
  PRODUCTION = 2,
  RECORD_LABEL = 3,
  IMAGES = 4,
  CATEGORY = 5,
  GENRE = 6,
  AUDIO = 7,
  //PLAYLIST = 9,
  //NFT = 10,
  LOCATION = 8,
  SUBMIT = 9
}

const RentModal = () => {
  const router = useRouter();
  const rentModal = useRentModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.TITLE);

  const { 
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      copywriteholder: '',
      copywriteyear: 2023,
      productionholder: '',
      productionyear: 2023,
      recordlabel: '',
      artworkimage: '',
      category: '',
      secondarygenre: '',
      language: '',
      artworksong: '',
      preview: '',
      lyrics: '',
      copywritedocuments: '',
      postingdate:'',
      uploadingdate:'',
      nfts:'',
      location: null,
      submit:''

    }
  });

  const location = watch('location');
  const category = watch('category');
  const copywriteyear = watch('copywriteyear');
  const productionyear = watch('productionyear');
  const artworkimage = watch('artworkimage');

  const Map = useMemo(() => dynamic(() => import('@/components/Map'), { 
    ssr: false 
  }), [location]);


  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.SUBMIT) {
      return onNext();
    }
    
    setIsLoading(true);

    axios.post('/api/upload', data)
    .then(() => {
      toast.success('Listing created!');
      router.refresh();
      reset();
      setStep(STEPS.TITLE)
      rentModal.onClose();
    })
    .catch(() => {
      toast.error('Something went wrong.');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.SUBMIT) {
      return 'Create'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.TITLE) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="What would the title of the song?"
        subtitle="Short and sweet works best!"
      />
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )


  if (step === STEPS.COPYWRITE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Tell Us about the copywrite area?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="copywriteholder"
          label="CopyWrite Holder"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Counter 
          onChange={(value) => setCustomValue('copywriteyear', value)}
          value={copywriteyear}
          title="CopyWrite Year" 
          subtitle=""
        />
        <hr/>
        <Input
          id="copywritedocuments"
          label="CoyWrite Documentation(google drive link)"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.PRODUCTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Tell Us about the copywrite area?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="productionholder"
          label="Production Holder"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Counter 
          onChange={(value) => setCustomValue('productionyear', value)}
          value={productionyear}
          title="Production Year" 
          subtitle=""
        />
      </div>
    )
  }

  if (step === STEPS.RECORD_LABEL) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Tell Us about your Label?"
          subtitle="eg: Independent or any label signed"
        />
        <Input
          id="recordlabel"
          label="LABEL"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add the preview photo of your song"
          subtitle="Show your audience what your music looks like!"
        />
        <ImageUpload
          onChange={(value) => setCustomValue('artworkimage', value)}
          value={artworkimage}
        />
      </div>
    )
  }

  if (step === STEPS.CATEGORY){
    bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your Song?"
        subtitle="Pick a category"
      />
      <div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => 
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )
  }

  if (step === STEPS.GENRE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe the genres of your Song?"
          subtitle="Upload something exotic!"
        />
     
        <hr/>
        <Input
          id="secondarygenre"
          label="Secondary Genre"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr/>
        <Input
          id="language"
          label="Language"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.AUDIO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Enter Your Song"
          subtitle="Upload file link (google drive)"
        />
        <Input
          id="artworksong"
          label="Upload Audio"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="preview"
          label="Upload Preview (google drive link)"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr/>
        <Input
          id="lyrics"
          label="Upload Lyrics"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr/>
        <Input
          id="postingdate"
          label="Release Date (DD/MM/YYYY)"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr/>
        <Input
          id="uploadingdate"
          label="Upload Date (DD/MM/YYYY)"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }


/*
  if (step === STEPS.PLAYLIST) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your Playlist?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="playlist"
          label="Playlist Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }
*/
/*
  if (step === STEPS.NFT) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your NFTs of your music"
          subtitle="What will you have?"
        />
        <Input
        id="blockchainname"
        label="Enter BlockChain name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <hr />
        <Input
        id="blockchainname"
        label="Enter BlockChain name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <hr />
        <Input
        id="blockchainname"
        label="Enter BlockChain name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <hr />
        <Input
        id="blockchainname"
        label="Enter BlockChain name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <hr />
        <Input
        id="blockchainname"
        label="Enter BlockChain name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        <hr />
    
      </div>
    )
  }
*/
  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect 
          value={location} 
          onChange={(value) => setCustomValue('location', value)} 
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.SUBMIT) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Do You Want to Submit the song"
          subtitle="Only Submit genuine copy and you agree to the terms and conditions of our service"
        />
      </div>
    )
  }
  

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="Airbnb your home!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.TITLE ? undefined : onBack}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  );
}

export default RentModal;





