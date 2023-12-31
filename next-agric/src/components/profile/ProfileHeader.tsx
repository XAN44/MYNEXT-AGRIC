<<<<<<< HEAD
import Image from 'next/image'

interface Props {
    accountId: string
    authUserId: string
    name: string
    nickname: string
    image: string
    bio: string
}

function ProfileHeader({
    accountId,
    authUserId,
    name,
    nickname,
    image,
    bio,
}: Props) {
    return (
        <div className="flex w-full flex-col justify-start">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative h-20 w-20 object-cover">
                        <Image
                            src={image}
                            alt="logo"
                            fill
                            className="rounded-full object-cover shadow-2xl"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-heading3-bold text-light-1 text-left">
                            {name}
                        </h2>
                        <p className="text-base-medium text-gray-1">
                            @{nickname}
                        </p>
                    </div>
                </div>
                {/* {accountId === authUserId && (
=======
import Link from "next/link";
import Image from "next/image";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  nickname: string;
  image: string;
  bio: string;
}

function ProfileHeader({
  accountId,
  authUserId,
  name,
  nickname,
  image,
  bio,
}: Props) {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={image}
              alt="logo"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-left text-heading3-bold text-light-1">
              {name}
            </h2>
            <p className="text-base-medium text-gray-1">@{nickname}</p>
          </div>
        </div>
        {accountId === authUserId && (
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
          <Link href="/profile/edit">
            <div>
              <h1>jao kong</h1>
            </div>
          </Link>
<<<<<<< HEAD
        )} */}
            </div>

            <p className="">{bio}</p>

            <div className="" />
        </div>
    )
}

export default ProfileHeader
=======
        )}
      </div>

      <p className="">{bio}</p>

      <div className="" />
    </div>
  );
}

export default ProfileHeader;
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
