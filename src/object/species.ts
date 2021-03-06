export { Species, Breeds }
class Species {
  private static list: Array<string> = [
    'null', 'cat', 'dog'
  ]
  public static getList () : Array<string> {
    return this.list;
  }
}
class Breeds {
  public static getList () : Array<Array<string>> {
    return this.list;
  }
  private static list: Array<Array<string>> = [
    [],
    [
      'null',
      'abyssinian',
      'american bobtail',
      'american curl',
      'american shorthair',
      'american wirehair',
      'balinese',
      'bengal',
      'birman',
      'bombay',
      'british shorthair',
      'burmese',
      'burmilla',
      'chartreux',
      'chinese li hua',
      'colorpoint shorthair',
      'cornish rex',
      'cymric',
      'devon rex',
      'egyptian mau',
      'european burmese',
      'exotic',
      'havana brown',
      'himalayan',
      'japanese bobtail',
      'javanese',
      'korat',
      'laperm',
      'maine coon',
      'manx',
      'nebelung',
      'norwegian forest',
      'ocicat',
      'oriental',
      'persian',
      'pixie-bob',
      'ragamuffin',
      'ragdoll',
      'russian blue',
      'savannah',
      'scottish fold',
      'selkirk rex',
      'siamese',
      'siberian',
      'singapura',
      'snowshoe',
      'somali',
      'sphynx',
      'tonkinese',
      'turkish angora',
      'turkish van'
    ],
    [
      'null',
      'airedale terrier',
      'affenpinscher, toy',
      'afghan hound, hound',
      'airedale terrier, terrier',
      'akita, working',
      'alaskan malamute, working',
      'american english coonhound, hound',
      'american eskimo dog (miniature), non-sporting',
      'american eskimo dog (standard), non-sporting',
      'american eskimo dog (toy), toy',
      'american foxhound, hound',
      'american hairless terrier, terrier',
      'american staffordshire terrier, terrier',
      'american water spaniel, sporting',
      'anatolian shepherd dog, working',
      'australian cattle dog, herding',
      'australian shepherd, herding',
      'australian terrier, terrier',
      'azawakh, sighthound',
      'borzoi',
      'basenji, hound',
      'basset hound, hound',
      'beagle, hound',
      'bearded collie, herding',
      'beauceron, herding',
      'bedlington terrier, terrier',
      'belgian malinois, herding',
      'belgian sheepdog, herding',
      'belgian tervuren, herding',
      'bergamasco, herding',
      'berger picard, herding',
      'bernese mountain dog, working',
      'bichon frisé, non-sporting',
      'black and tan coonhound, hound',
      'black russian terrier, working',
      'bloodhound, hound',
      'bluetick coonhound, hound',
      'boerboel, working',
      'border collie, herding',
      'border terrier, terrier',
      'borzoi, hound',
      'boston terrier, non-sporting',
      'bouvier des flandres, herding',
      'boxer, working',
      'boykin spaniel, sporting',
      'briard, herding',
      'brittany, sporting',
      'brussels griffon, toy',
      'bull terrier, terrier',
      'bulldog, non-sporting',
      'bullmastiff, working',
      'clumber spaniel',
      'cairn terrier, terrier',
      'canaan dog, working',
      'cane corso, working',
      'cardigan welsh corgi, herding',
      'cavalier king charles spaniel, toy',
      'cesky terrier, terrier',
      'chesapeake bay retriever, sporting',
      'chihuahua, toy',
      'chinese crested dog, toy',
      'chinese shar pei, non-sporting',
      'chinook, working',
      'chow chow, non-sporting',
      'cirneco dell etna, hound',
      'clumber spaniel, sporting',
      'cocker spaniel, sporting',
      'collie, herding',
      'coton de tulear, non-sporting',
      'curly-coated retriever, sporting',
      'dogue de bordeaux',
      'dachshunds, hound',
      'dalmatian, non-sporting',
      'dandie dinmont terrier, terrier',
      'doberman pinscher, working',
      'dogue de bordeaux, working',
      'english cocker spaniel, sporting',
      'english foxhound, hound',
      'english setter, sporting',
      'english springer spaniel, sporting',
      'english toy spaniel, toy',
      'entlebucher mountain dog, herding',
      'field spaniel',
      'field spaniel, sporting',
      'finnish lapphund, herding',
      'finnish spitz, non-sporting',
      'flat-coated retriever, sporting',
      'french bulldog, non-sporting',
      'greyhound',
      'german pinscher, working',
      'german shepherd dog, herding',
      'german shorthaired pointer, sporting',
      'german wirehaired pointer, sporting',
      'giant schnauzer, working',
      'glen of imaal terrier, terrier',
      'golden retriever, sporting',
      'gordon setter, sporting',
      'great dane, working',
      'great pyrenees, working',
      'greater swiss mountain dog, working',
      'greyhound, hound',
      'harrier, hound',
      'havanese, toy',
      'ibizan hound, hound',
      'icelandic sheepdog, herding',
      'irish red and white setter, sporting',
      'irish setter, sporting',
      'irish terrier, terrier',
      'irish water spaniel, sporting',
      'irish wolfhound, hound',
      'italian greyhound, toy',
      'japanese chin, toy',
      'keeshond, non-sporting',
      'kerry blue terrier, terrier',
      'komondor, working',
      'kuvasz, working',
      'labrador retriever',
      'labrador retriever, sporting',
      'lagotto romagnolo, sporting',
      'lakeland terrier, terrier',
      'leonberger, working',
      'lhasa apso, non-sporting',
      'löwchen, non-sporting',
      'miniature schnauzer puppy',
      'maltese, toy',
      'manchester terrier, terrier & toy',
      'mastiff, working',
      'miniature american shepherd, herding',
      'miniature bull terrier, terrier',
      'miniature pinscher, toy',
      'miniature schnauzer, terrier',
      'nova scotia duck-tolling retriever',
      'neapolitan mastiff, working',
      'newfoundland, working',
      'norfolk terrier, terrier',
      'norwegian buhund, herding',
      'norwegian elkhound, hound',
      'norwegian lundehund, non-sporting',
      'norwich terrier, terrier',
      'nova scotia duck-tolling retriever, sporting',
      'old english sheepdog, herding',
      'otterhound, hound',
      'pharaoh hound',
      'papillon, toy',
      'parson russell terrier, terrier',
      'pekingese, toy',
      'pembroke welsh corgi, herding',
      'petit basset griffon vendéen, hound',
      'pharaoh hound, hound',
      'plott, hound',
      'pointer, sporting',
      'polish lowland sheepdog, herding',
      'pomeranian, toy',
      'poodle, non-sporting & toy',
      'portuguese podengo pequeno, hound',
      'portuguese water dog, working',
      'pug, toy',
      'puli, herding',
      'pumi, herding',
      'pyrenean shepherd, herding',
      'rat terrier, terrier',
      'redbone coonhound, hound',
      'rhodesian ridgeback, hound',
      'rottweiler, working',
      'russell terrier, terrier',
      'st. bernard, working',
      'saluki, hound',
      'samoyed, working',
      'schipperke, non-sporting',
      'scottish deerhound, hound',
      'scottish terrier, terrier',
      'sealyham terrier, terrier',
      'shetland sheepdog, herding',
      'shiba inu, non-sporting',
      'shih tzu, toy',
      'siberian husky, working',
      'silky terrier, toy',
      'skye terrier, terrier',
      'sloughi, hound',
      'smooth fox terrier, terrier',
      'soft-coated wheaten terrier, terrier',
      'spanish water dog, herding',
      'spinone italiano, sporting',
      'staffordshire bull terrier, terrier',
      'standard schnauzer, working',
      'sussex spaniel, sporting',
      'swedish vallhund, herding',
      'tibetan mastiff, working',
      'tibetan spaniel, non-sporting',
      'tibetan terrier, non-sporting',
      'toy fox terrier, toy',
      'treeing walker coonhound, hound',
      'vizsla, sporting',
      'west highland white terrier',
      'weimaraner, sporting',
      'welsh springer spaniel, sporting',
      'welsh terrier, terrier',
      'west highland white terrier, terrier',
      'whippet, hound',
      'wire fox terrier, terrier',
      'wirehaired pointing griffon, sporting',
      'wirehaired vizsla, sporting',
      'xoloitzcuintli, non-sporting',
      'yorkshire terrier, toy'
    ]
  ]
}
