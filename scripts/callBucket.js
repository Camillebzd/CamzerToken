async function main() {
    const CamzerContract = await ethers.getContractFactory("Camzer");
    const camzer = await CamzerContract.attach(
        "0x2c7697fb1c01c9f913f906FA7DbDcF21918978Bc" // The deployed contract address
    );

    await camzer.approve("0x873289a1aD6Cf024B927bd13bd183B264d274c68", ethers.utils.parseUnits("1", 18));

    const BucketContract = await ethers.getContractFactory("Bucket");
    const bucket = await BucketContract.attach(
        "0x873289a1aD6Cf024B927bd13bd183B264d274c68" // The deployed contract address
    );

    await bucket.drop("0x2c7697fb1c01c9f913f906FA7DbDcF21918978Bc", ethers.utils.parseUnits("1", 18));
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});