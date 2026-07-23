const NewsByIdPage = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
      News By Id Page {id}
    </div>
  )
}

export default NewsByIdPage
